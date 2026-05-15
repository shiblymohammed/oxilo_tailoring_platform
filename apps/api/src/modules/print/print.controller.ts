import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';
import { PrintService } from './print.service';
import { CurrentUser } from '../../common/decorators/current-user.decorator';

@ApiTags('Print')
@ApiBearerAuth()
@UseGuards(AuthGuard('jwt'))
@Controller('print')
export class PrintController {
  constructor(private service: PrintService) {}

  @Get('order/:id')
  getOrderPrintData(@CurrentUser('shopId') shopId: string, @Param('id') id: string) {
    return this.service.getOrderPrintData(shopId, id);
  }
}
