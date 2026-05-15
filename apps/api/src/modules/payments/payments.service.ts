import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';
import { CreatePaymentDto } from './dto/create-payment.dto';

@Injectable()
export class PaymentsService {
  constructor(private prisma: PrismaService) {}

  async create(shopId: string, dto: CreatePaymentDto) {
    // Verify order belongs to shop
    const order = await this.prisma.order.findFirst({
      where: { id: dto.orderId, shopId },
    });
    if (!order) throw new NotFoundException('Order not found');

    const payment = await this.prisma.payment.create({ data: dto });

    // Recalculate balance
    const totalPaid = await this.prisma.payment.aggregate({
      where: { orderId: dto.orderId },
      _sum: { amount: true },
    });

    await this.prisma.order.update({
      where: { id: dto.orderId },
      data: {
        advancePaid: totalPaid._sum.amount ?? 0,
        balanceDue: Number(order.totalAmount) - Number(totalPaid._sum.amount ?? 0),
      },
    });

    return payment;
  }

  async getPending(shopId: string) {
    return this.prisma.order.findMany({
      where: { shopId, balanceDue: { gt: 0 } },
      include: {
        customer: { select: { id: true, name: true, phone: true } },
        payments: true,
      },
      orderBy: { deliveryDate: 'asc' },
    });
  }

  async getForOrder(shopId: string, orderId: string) {
    const order = await this.prisma.order.findFirst({ where: { id: orderId, shopId } });
    if (!order) throw new NotFoundException('Order not found');
    return this.prisma.payment.findMany({ where: { orderId }, orderBy: { paidAt: 'desc' } });
  }
}
