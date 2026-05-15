import { Controller, Get, Patch, Body, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';
import { PrismaService } from '../../database/prisma.service';
import { CurrentUser } from '../../common/decorators/current-user.decorator';

@ApiTags('Shop')
@ApiBearerAuth()
@UseGuards(AuthGuard('jwt'))
@Controller('settings/shop')
export class ShopController {
  constructor(private prisma: PrismaService) {}

  @Get()
  getShop(@CurrentUser('shopId') shopId: string) {
    return this.prisma.shop.findUnique({
      where: { id: shopId },
      select: { id: true, name: true, phone: true, address: true, currency: true, timezone: true, upiId: true },
    });
  }

  @Patch()
  updateShop(@CurrentUser('shopId') shopId: string, @Body() body: any) {
    const allowed = ['name', 'phone', 'address', 'upiId', 'currency', 'timezone'];
    const data: any = {};
    for (const key of allowed) {
      if (body[key] !== undefined) data[key] = body[key];
    }
    return this.prisma.shop.update({ where: { id: shopId }, data });
  }
}
