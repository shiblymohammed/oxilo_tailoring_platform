import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';

@Injectable()
export class PrintService {
  constructor(private prisma: PrismaService) {}

  async getOrderPrintData(shopId: string, orderId: string) {
    const order = await this.prisma.order.findFirst({
      where: { id: orderId, shopId },
      include: {
        shop: true,
        customer: true,
        items: { include: { garmentType: true, measurementProfile: true } },
        payments: true,
      },
    });
    if (!order) throw new NotFoundException('Order not found');
    return order;
  }
}
