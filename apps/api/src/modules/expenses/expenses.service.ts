import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';

@Injectable()
export class ExpensesService {
  constructor(private prisma: PrismaService) {}
  findAll(shopId: string) { return this.prisma.expense.findMany({ where: { shopId }, orderBy: { date: 'desc' } }); }
  create(shopId: string, data: any) { return this.prisma.expense.create({ data: { ...data, shopId } }); }
}
