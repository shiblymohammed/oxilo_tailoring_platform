import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';

@Injectable()
export class PricingService {
  constructor(private prisma: PrismaService) {}
  findAll(shopId: string) { return this.prisma.pricingRule.findMany({ where: { shopId, isActive: true } }); }
  create(shopId: string, data: any) { return this.prisma.pricingRule.create({ data: { ...data, shopId } }); }
  update(id: string, data: any) { return this.prisma.pricingRule.update({ where: { id }, data }); }
}
