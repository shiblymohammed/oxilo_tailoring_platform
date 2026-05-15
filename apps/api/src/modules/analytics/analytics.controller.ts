import { Controller, Get, Query, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';
import { AnalyticsService } from './analytics.service';
import { CurrentUser } from '../../common/decorators/current-user.decorator';

@ApiTags('Analytics')
@ApiBearerAuth()
@UseGuards(AuthGuard('jwt'))
@Controller('analytics')
export class AnalyticsController {
  constructor(private service: AnalyticsService) {}

  @Get('dashboard')
  getDashboard(@CurrentUser('shopId') shopId: string) { return this.service.getDashboard(shopId); }

  @Get('revenue')
  getRevenue(@CurrentUser('shopId') shopId: string, @Query('from') from: string, @Query('to') to: string) {
    return this.service.getRevenue(shopId, from, to);
  }

  @Get('top-customers')
  getTopCustomers(@CurrentUser('shopId') shopId: string) { return this.service.getTopCustomers(shopId); }
}
