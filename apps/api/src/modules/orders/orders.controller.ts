import {
  Controller, Get, Post, Patch, Param, Body, Query, UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';
import { OrdersService } from './orders.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderStatusDto } from './dto/update-order-status.dto';
import { CurrentUser } from '../../common/decorators/current-user.decorator';
import { PaginationDto } from '../../common/pagination/pagination.dto';
import { OrderStatus, Priority } from '@oxilo/database';

@ApiTags('Orders')
@ApiBearerAuth()
@UseGuards(AuthGuard('jwt'))
@Controller('orders')
export class OrdersController {
  constructor(private service: OrdersService) {}

  @Get()
  findAll(
    @CurrentUser('shopId') shopId: string,
    @Query() query: PaginationDto & { status?: OrderStatus; priority?: Priority; assignedToId?: string; date?: string; search?: string },
  ) {
    return this.service.findAll(shopId, query);
  }

  @Get('today/deliveries')
  getTodayDeliveries(@CurrentUser('shopId') shopId: string) {
    return this.service.getTodayDeliveries(shopId);
  }

  @Get('today/delayed')
  getDelayed(@CurrentUser('shopId') shopId: string) {
    return this.service.getDelayed(shopId);
  }

  @Get('scan/:qrCode')
  findByQr(@CurrentUser('shopId') shopId: string, @Param('qrCode') qrCode: string) {
    return this.service.findByQr(shopId, qrCode);
  }

  @Get(':id')
  findOne(@CurrentUser('shopId') shopId: string, @Param('id') id: string) {
    return this.service.findOne(shopId, id);
  }

  @Post()
  create(
    @CurrentUser('shopId') shopId: string,
    @CurrentUser('id') userId: string,
    @Body() dto: CreateOrderDto,
  ) {
    return this.service.create(shopId, userId, dto);
  }

  @Patch(':id/status')
  updateStatus(
    @CurrentUser('shopId') shopId: string,
    @CurrentUser('id') userId: string,
    @Param('id') id: string,
    @Body() dto: UpdateOrderStatusDto,
  ) {
    return this.service.updateStatus(shopId, id, userId, dto);
  }

  @Post(':id/duplicate')
  duplicate(
    @CurrentUser('shopId') shopId: string,
    @CurrentUser('id') userId: string,
    @Param('id') id: string,
  ) {
    return this.service.duplicate(shopId, id, userId);
  }

  @Patch(':id')
  update(
    @CurrentUser('shopId') shopId: string,
    @Param('id') id: string,
    @Body() dto: any,
  ) {
    return this.service.update(shopId, id, dto);
  }

  @Post(':id/complete')
  completeOrder(
    @CurrentUser('shopId') shopId: string,
    @CurrentUser('id') userId: string,
    @Param('id') id: string,
    @Body() dto: any,
  ) {
    return this.service.completeOrder(shopId, id, userId, dto);
  }
}
