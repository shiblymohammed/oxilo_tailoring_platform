import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';
import { OrderStatus } from '@oxilo/database';
import { startOfMonth, endOfMonth, startOfDay, endOfDay } from 'date-fns';

@Injectable()
export class AnalyticsService {
  constructor(private prisma: PrismaService) {}

  async getDashboard(shopId: string) {
    const today = new Date();
    const monthStart = startOfMonth(today);
    const monthEnd = endOfMonth(today);

    const [
      totalOrders, pendingOrders, readyOrders, todayDeliveries,
      monthRevenue, totalCustomers, delayedOrders, pendingDues,
    ] = await this.prisma.$transaction([
      this.prisma.order.count({ where: { shopId } }),
      this.prisma.order.count({ where: { shopId, status: { notIn: [OrderStatus.DELIVERED, OrderStatus.CANCELLED] } } }),
      this.prisma.order.count({ where: { shopId, status: OrderStatus.READY } }),
      this.prisma.order.count({
        where: { shopId, deliveryDate: { gte: startOfDay(today), lte: endOfDay(today) } },
      }),
      this.prisma.payment.aggregate({
        where: { order: { shopId }, paidAt: { gte: monthStart, lte: monthEnd } },
        _sum: { amount: true },
      }),
      this.prisma.customer.count({ where: { shopId } }),
      this.prisma.order.count({
        where: { shopId, deliveryDate: { lt: today }, status: { notIn: [OrderStatus.DELIVERED, OrderStatus.CANCELLED] } },
      }),
      this.prisma.order.aggregate({
        where: { shopId, status: { notIn: [OrderStatus.DELIVERED, OrderStatus.CANCELLED] } },
        _sum: { balanceDue: true },
      }),
    ]);

    return {
      totalOrders,
      pendingOrders,
      readyOrders,
      todayDeliveries,
      monthRevenue: monthRevenue._sum.amount ?? 0,
      totalCustomers,
      delayedOrders,
      pendingDues: pendingDues._sum.balanceDue ?? 0,
    };
  }

  async getRevenue(shopId: string, from: string, to: string) {
    return this.prisma.payment.groupBy({
      by: ['paidAt'],
      where: {
        order: { shopId },
        paidAt: { gte: new Date(from), lte: new Date(to) },
      },
      _sum: { amount: true },
      orderBy: { paidAt: 'asc' },
    });
  }

  async getTopCustomers(shopId: string) {
    return this.prisma.customer.findMany({
      where: { shopId },
      orderBy: { totalOrders: 'desc' },
      take: 10,
      select: { id: true, name: true, phone: true, totalOrders: true, tier: true },
    });
  }
}
