import { Injectable, NotFoundException, ConflictException } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { PaginationDto, paginate, buildMeta } from '../../common/pagination/pagination.dto';
import { CustomerTier } from '@oxilo/database';

@Injectable()
export class CustomersService {
  constructor(private prisma: PrismaService) {}

  async findAll(shopId: string, query: PaginationDto & { search?: string; tier?: CustomerTier }) {
    const { page = 1, limit = 20, search, tier } = query;

    const where: any = { shopId };
    if (tier) where.tier = tier;
    if (search) {
      where.OR = [
        { name: { contains: search, mode: 'insensitive' } },
        { phone: { contains: search } },
        { email: { contains: search, mode: 'insensitive' } },
      ];
    }

    const [customers, total] = await this.prisma.$transaction([
      this.prisma.customer.findMany({
        where,
        ...paginate(page, limit),
        orderBy: { createdAt: 'desc' },
        include: { _count: { select: { orders: true } } },
      }),
      this.prisma.customer.count({ where }),
    ]);

    return { data: customers, meta: buildMeta(total, page, limit) };
  }

  async findOne(shopId: string, id: string) {
    const customer = await this.prisma.customer.findFirst({
      where: { id, shopId },
      include: {
        measurements: {
          orderBy: { createdAt: 'desc' },
        },
        orders: {
          orderBy: { createdAt: 'desc' },
          take: 10,
          include: {
            items: { include: { garmentType: true } },
          },
        },
        _count: { select: { orders: true } },
      },
    });

    if (!customer) throw new NotFoundException('Customer not found');
    return customer;
  }

  async create(shopId: string, dto: CreateCustomerDto) {
    const existing = await this.prisma.customer.findUnique({
      where: { shopId_phone: { shopId, phone: dto.phone } },
    });
    if (existing) throw new ConflictException('Customer with this phone already exists');

    const data: any = { ...dto, shopId };
    if (dto.birthday) data.birthday = new Date(dto.birthday);
    if (dto.anniversary) data.anniversary = new Date(dto.anniversary);

    return this.prisma.customer.create({ data });
  }

  async update(shopId: string, id: string, dto: UpdateCustomerDto) {
    await this.findOne(shopId, id);
    const data: any = { ...dto };
    if (dto.birthday) data.birthday = new Date(dto.birthday as string);
    if (dto.anniversary) data.anniversary = new Date(dto.anniversary as string);
    return this.prisma.customer.update({ where: { id }, data });
  }

  async getOrders(shopId: string, customerId: string, query: PaginationDto) {
    await this.findOne(shopId, customerId);
    const { page = 1, limit = 20 } = query;

    const [orders, total] = await this.prisma.$transaction([
      this.prisma.order.findMany({
        where: { shopId, customerId },
        ...paginate(page, limit),
        orderBy: { createdAt: 'desc' },
        include: {
          items: { include: { garmentType: true } },
          payments: true,
          assignedTo: { select: { id: true, name: true } },
        },
      }),
      this.prisma.order.count({ where: { shopId, customerId } }),
    ]);

    return { data: orders, meta: buildMeta(total, page, limit) };
  }

  async updateTier(shopId: string, id: string) {
    const count = await this.prisma.order.count({ where: { shopId, customerId: id } });
    let tier: CustomerTier = CustomerTier.REGULAR;
    if (count >= 10) tier = CustomerTier.VIP;
    else if (count >= 3) tier = CustomerTier.FREQUENT;

    return this.prisma.customer.update({
      where: { id },
      data: { tier, totalOrders: count },
    });
  }
}
