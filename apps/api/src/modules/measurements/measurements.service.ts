import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';
import { CreateMeasurementDto } from './dto/create-measurement.dto';
import { UpdateMeasurementDto } from './dto/update-measurement.dto';

@Injectable()
export class MeasurementsService {
  constructor(private prisma: PrismaService) {}

  async findByCustomer(shopId: string, customerId: string) {
    const customer = await this.prisma.customer.findFirst({ where: { id: customerId, shopId } });
    if (!customer) throw new NotFoundException('Customer not found');
    return this.prisma.measurementProfile.findMany({
      where: { customerId },
      include: { garmentType: true, versions: { orderBy: { createdAt: 'desc' }, take: 5 } },
      orderBy: { createdAt: 'desc' },
    });
  }

  async create(shopId: string, customerId: string, dto: CreateMeasurementDto) {
    const customer = await this.prisma.customer.findFirst({ where: { id: customerId, shopId } });
    if (!customer) throw new NotFoundException('Customer not found');
    return this.prisma.measurementProfile.create({
      data: { customerId, label: dto.label, garmentTypeId: dto.garmentTypeId, fields: dto.fields },
    });
  }

  async update(shopId: string, profileId: string, userId: string, dto: UpdateMeasurementDto) {
    const profile = await this.prisma.measurementProfile.findFirst({
      where: { id: profileId, customer: { shopId } },
    });
    if (!profile) throw new NotFoundException('Profile not found');

    // Snapshot old version before update
    await this.prisma.measurementVersion.create({
      data: { profileId, fields: profile.fields as object, createdBy: userId },
    });

    return this.prisma.measurementProfile.update({
      where: { id: profileId },
      data: { fields: dto.fields, label: dto.label },
    });
  }

  async getHistory(shopId: string, profileId: string) {
    const profile = await this.prisma.measurementProfile.findFirst({
      where: { id: profileId, customer: { shopId } },
    });
    if (!profile) throw new NotFoundException('Profile not found');
    return this.prisma.measurementVersion.findMany({
      where: { profileId },
      orderBy: { createdAt: 'desc' },
    });
  }
}
