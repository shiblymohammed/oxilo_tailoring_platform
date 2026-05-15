import { Controller, Get, Post, Body, Param, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';
import { PaymentsService } from './payments.service';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { CurrentUser } from '../../common/decorators/current-user.decorator';

@ApiTags('Payments')
@ApiBearerAuth()
@UseGuards(AuthGuard('jwt'))
@Controller('payments')
export class PaymentsController {
  constructor(private service: PaymentsService) {}

  @Get('pending')
  getPending(@CurrentUser('shopId') shopId: string) {
    return this.service.getPending(shopId);
  }

  @Post()
  create(@CurrentUser('shopId') shopId: string, @Body() dto: CreatePaymentDto) {
    return this.service.create(shopId, dto);
  }

  @Get('order/:orderId')
  getForOrder(@CurrentUser('shopId') shopId: string, @Param('orderId') orderId: string) {
    return this.service.getForOrder(shopId, orderId);
  }
}
