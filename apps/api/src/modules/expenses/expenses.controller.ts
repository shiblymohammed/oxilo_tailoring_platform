import { Controller, Get, Post, Body, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';
import { ExpensesService } from './expenses.service';
import { CurrentUser } from '../../common/decorators/current-user.decorator';

@ApiTags('Expenses')
@ApiBearerAuth()
@UseGuards(AuthGuard('jwt'))
@Controller('expenses')
export class ExpensesController {
  constructor(private service: ExpensesService) {}
  @Get() findAll(@CurrentUser('shopId') shopId: string) { return this.service.findAll(shopId); }
  @Post() create(@CurrentUser('shopId') shopId: string, @Body() body: any) { return this.service.create(shopId, body); }
}
