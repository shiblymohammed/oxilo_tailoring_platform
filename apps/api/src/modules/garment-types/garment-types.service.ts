import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';

@Injectable()
export class GarmentTypesService {
  constructor(private prisma: PrismaService) {}

  findAll(shopId: string) {
    return this.prisma.garmentType.findMany({ where: { shopId, isActive: true }, orderBy: { name: 'asc' } });
  }

  create(shopId: string, data: { name: string; basePrice: number; category?: any; measurementSchema?: any }) {
    return this.prisma.garmentType.create({ data: { ...data, shopId } });
  }

  update(shopId: string, id: string, data: any) {
    return this.prisma.garmentType.update({ where: { id }, data });
  }
}
