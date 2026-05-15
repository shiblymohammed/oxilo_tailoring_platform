import { Controller, Get, Post, Patch, Param, Body, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';
import { MeasurementsService } from './measurements.service';
import { CreateMeasurementDto } from './dto/create-measurement.dto';
import { UpdateMeasurementDto } from './dto/update-measurement.dto';
import { CurrentUser } from '../../common/decorators/current-user.decorator';

@ApiTags('Measurements')
@ApiBearerAuth()
@UseGuards(AuthGuard('jwt'))
@Controller('measurements')
export class MeasurementsController {
  constructor(private service: MeasurementsService) {}

  @Get('customer/:customerId')
  findByCustomer(@CurrentUser('shopId') shopId: string, @Param('customerId') customerId: string) {
    return this.service.findByCustomer(shopId, customerId);
  }

  @Post('customer/:customerId')
  create(
    @CurrentUser('shopId') shopId: string,
    @Param('customerId') customerId: string,
    @Body() dto: CreateMeasurementDto,
  ) {
    return this.service.create(shopId, customerId, dto);
  }

  @Patch(':profileId')
  update(
    @CurrentUser('shopId') shopId: string,
    @CurrentUser('id') userId: string,
    @Param('profileId') profileId: string,
    @Body() dto: UpdateMeasurementDto,
  ) {
    return this.service.update(shopId, profileId, userId, dto);
  }

  @Get(':profileId/history')
  getHistory(@CurrentUser('shopId') shopId: string, @Param('profileId') profileId: string) {
    return this.service.getHistory(shopId, profileId);
  }
}
