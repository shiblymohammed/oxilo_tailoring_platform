import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderStatusDto } from './dto/update-order-status.dto';
import { PaginationDto, paginate, buildMeta } from '../../common/pagination/pagination.dto';
import { OrderStatus, Priority } from '@oxilo/database';
import * as QRCode from 'qrcode';

const ORDER_INCLUDE = {
  customer: { select: { id: true, name: true, phone: true, whatsapp: true } },
  assignedTo: { select: { id: true, name: true } },
  items: {
    include: {
      garmentType: true,
      measurementProfile: true,
      photos: true,
    },
  },
  payments: true,
  statusLogs: {
    include: { user: { select: { id: true, name: true } } },
    orderBy: { changedAt: 'desc' as const },
  },
};

@Injectable()
export class OrdersService {
  constructor(private prisma: PrismaService) {}

  private async generateOrderNumber(shopId: string): Promise<string> {
    const count = await this.prisma.order.count({ where: { shopId } });
    const year = new Date().getFullYear();
    return `ORD-${year}-${String(count + 1).padStart(4, '0')}`;
  }

  async findAll(
    shopId: string,
    query: PaginationDto & {
      status?: OrderStatus;
      priority?: Priority;
      assignedToId?: string;
      date?: string;
      search?: string;
    },
  ) {
    const { page = 1, limit = 20, status, priority, assignedToId, date, search } = query;

    const where: any = { shopId };
    if (status) where.status = status;
    if (priority) where.priority = priority;
    if (assignedToId) where.assignedToId = assignedToId;
    if (date) {
      const d = new Date(date);
      where.deliveryDate = {
        gte: new Date(d.setHours(0, 0, 0, 0)),
        lte: new Date(d.setHours(23, 59, 59, 999)),
      };
    }
    if (search) {
      where.OR = [
        { orderNumber: { contains: search, mode: 'insensitive' } },
        { customer: { name: { contains: search, mode: 'insensitive' } } },
        { customer: { phone: { contains: search } } },
      ];
    }

    const [orders, total] = await this.prisma.$transaction([
      this.prisma.order.findMany({
        where,
        ...paginate(page, limit),
        orderBy: { createdAt: 'desc' },
        include: {
          customer: { select: { id: true, name: true, phone: true } },
          assignedTo: { select: { id: true, name: true } },
          items: { include: { garmentType: true } },
          _count: { select: { payments: true } },
        },
      }),
      this.prisma.order.count({ where }),
    ]);

    return { data: orders, meta: buildMeta(total, page, limit) };
  }

  async findOne(shopId: string, id: string) {
    const order = await this.prisma.order.findFirst({
      where: { id, shopId },
      include: ORDER_INCLUDE,
    });
    if (!order) throw new NotFoundException('Order not found');
    return order;
  }

  async findByQr(shopId: string, qrCode: string) {
    const order = await this.prisma.order.findFirst({
      where: { shopId, qrCode },
      include: ORDER_INCLUDE,
    });
    if (!order) throw new NotFoundException('Order not found');
    return order;
  }

  async create(shopId: string, userId: string, dto: CreateOrderDto) {
    const orderNumber = await this.generateOrderNumber(shopId);
    const qrPayload = JSON.stringify({ orderId: null, shopId, orderNumber });

    // Calculate total
    const total = dto.items.reduce((sum, item) => {
      const addOnTotal = (item.addOns || []).reduce((a: number, ao: any) => a + ao.price, 0);
      return sum + (item.unitPrice + addOnTotal) * (item.quantity ?? 1);
    }, 0);

    const order = await this.prisma.order.create({
      data: {
        shopId,
        customerId: dto.customerId,
        orderNumber,
        status: OrderStatus.RECEIVED,
        priority: dto.priority ?? Priority.NORMAL,
        deliveryDate: new Date(dto.deliveryDate),
        assignedToId: dto.assignedToId,
        totalAmount: total,
        advancePaid: dto.advancePaid ?? 0,
        balanceDue: total - (dto.advancePaid ?? 0),
        notes: dto.notes,
        isAlteration: dto.isAlteration ?? false,
        items: {
          create: dto.items.map((item) => ({
            garmentType: { connect: { id: item.garmentTypeId } },
            ...(item.measurementProfileId ? { measurementProfile: { connect: { id: item.measurementProfileId } } } : {}),
            quantity: item.quantity ?? 1,
            unitPrice: item.unitPrice,
            addOns: (item.addOns ?? []) as any,
            notes: item.notes,
          })),
        },
        statusLogs: {
          create: {
            status: OrderStatus.RECEIVED,
            changedBy: userId,
            note: 'Order created',
          },
        },
      },
      include: ORDER_INCLUDE,
    });

    // Generate and save QR code
    const qrData = JSON.stringify({ orderId: order.id, shopId });
    const qrCode = await QRCode.toDataURL(qrData, { errorCorrectionLevel: 'M', width: 200 });
    await this.prisma.order.update({ where: { id: order.id }, data: { qrCode } });

    // Update customer order count & tier
    await this.prisma.customer.update({
      where: { id: dto.customerId },
      data: { totalOrders: { increment: 1 } },
    });

    return { ...order, qrCode };
  }

  async updateStatus(shopId: string, id: string, userId: string, dto: UpdateOrderStatusDto) {
    const order = await this.findOne(shopId, id);

    await this.prisma.$transaction([
      this.prisma.order.update({
        where: { id },
        data: {
          status: dto.status,
          ...(dto.trialDate ? { trialDate: new Date(dto.trialDate) } : {}),
        },
      }),
      this.prisma.statusLog.create({
        data: {
          orderId: id,
          status: dto.status,
          changedBy: userId,
          note: dto.note,
        },
      }),
    ]);

    return this.findOne(shopId, id);
  }

  async duplicate(shopId: string, id: string, userId: string) {
    const source = await this.findOne(shopId, id);

    const newOrder = await this.create(shopId, userId, {
      customerId: source.customerId,
      priority: source.priority,
      deliveryDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(),
      assignedToId: source.assignedToId ?? undefined,
      notes: source.notes ?? undefined,
      isAlteration: source.isAlteration,
      advancePaid: 0,
      items: source.items.map((item: any) => ({
        garmentTypeId: item.garmentTypeId,
        measurementProfileId: item.measurementProfileId,
        quantity: item.quantity,
        unitPrice: Number(item.unitPrice),
        addOns: item.addOns as any[],
        notes: item.notes,
      })),
    });

    return newOrder;
  }

  async getTodayDeliveries(shopId: string) {
    const today = new Date();
    return this.prisma.order.findMany({
      where: {
        shopId,
        deliveryDate: {
          gte: new Date(today.setHours(0, 0, 0, 0)),
          lte: new Date(today.setHours(23, 59, 59, 999)),
        },
        status: { notIn: [OrderStatus.DELIVERED, OrderStatus.CANCELLED] },
      },
      include: {
        customer: { select: { id: true, name: true, phone: true, whatsapp: true } },
      },
      orderBy: { priority: 'asc' },
    });
  }

  async getDelayed(shopId: string) {
    return this.prisma.order.findMany({
      where: {
        shopId,
        deliveryDate: { lt: new Date() },
        status: { notIn: [OrderStatus.DELIVERED, OrderStatus.CANCELLED] },
      },
      include: {
        customer: { select: { id: true, name: true, phone: true } },
      },
      orderBy: { deliveryDate: 'asc' },
    });
  }

  async update(shopId: string, id: string, dto: any) {
    const order = await this.prisma.order.findFirst({ where: { id, shopId } });
    if (!order) throw new Error('Order not found');
    const allowed = ['notes', 'deliveryDate', 'priority', 'assignedToId'];
    const data: any = {};
    for (const key of allowed) {
      if (dto[key] !== undefined) {
        data[key] = key === 'deliveryDate' ? new Date(dto[key]) : dto[key];
      }
    }
    return this.prisma.order.update({ where: { id }, data, include: { customer: true, items: { include: { garmentType: true } } } });
  }

  async completeOrder(
    shopId: string,
    id: string,
    userId: string,
    dto: { discountAmount?: number; discountNote?: string; paymentAmount: number; paymentMethod: string },
  ) {
    const order = await this.findOne(shopId, id);
    const discount = Number(dto.discountAmount ?? 0);
    const paid     = Number(dto.paymentAmount ?? 0);
    const newBalance = Math.max(0, Number(order.balanceDue) - discount - paid);

    await this.prisma.$transaction([
      this.prisma.order.update({
        where: { id },
        data: {
          status: OrderStatus.DELIVERED,
          discountAmount: discount,
          discountNote: dto.discountNote ?? null,
          advancePaid: { increment: paid },
          balanceDue: newBalance,
        },
      }),
      ...(paid > 0 ? [this.prisma.payment.create({
        data: {
          orderId: id,
          amount: paid,
          method: dto.paymentMethod as any,
          notes: 'Final payment on delivery',
        },
      })] : []),
      this.prisma.statusLog.create({
        data: {
          orderId: id,
          status: OrderStatus.DELIVERED,
          changedBy: userId,
          note: `Completed. Discount: ₹${discount}`,
        },
      }),
    ]);

    return this.findOne(shopId, id);
  }
}
