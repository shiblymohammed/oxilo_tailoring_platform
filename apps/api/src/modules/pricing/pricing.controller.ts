import { Controller, Get, Post, Patch, Param, Body, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';
import { PricingService } from './pricing.service';
import { CurrentUser } from '../../common/decorators/current-user.decorator';

@ApiTags('Pricing')
@ApiBearerAuth()
@UseGuards(AuthGuard('jwt'))
@Controller('settings/pricing-rules')
export class PricingController {
  constructor(private service: PricingService) {}
  @Get() findAll(@CurrentUser('shopId') shopId: string) { return this.service.findAll(shopId); }
  @Post() create(@CurrentUser('shopId') shopId: string, @Body() body: any) { return this.service.create(shopId, body); }
  @Patch(':id') update(@Param('id') id: string, @Body() body: any) { return this.service.update(id, body); }
}
