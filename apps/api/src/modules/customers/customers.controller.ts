import {
  Controller, Get, Post, Patch, Param, Body, Query, UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';
import { CustomersService } from './customers.service';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { CurrentUser } from '../../common/decorators/current-user.decorator';
import { PaginationDto } from '../../common/pagination/pagination.dto';

@ApiTags('Customers')
@ApiBearerAuth()
@UseGuards(AuthGuard('jwt'))
@Controller('customers')
export class CustomersController {
  constructor(private service: CustomersService) {}

  @Get()
  findAll(
    @CurrentUser('shopId') shopId: string,
    @Query() query: PaginationDto & { search?: string },
  ) {
    return this.service.findAll(shopId, query);
  }

  @Get(':id')
  findOne(@CurrentUser('shopId') shopId: string, @Param('id') id: string) {
    return this.service.findOne(shopId, id);
  }

  @Get(':id/orders')
  getOrders(
    @CurrentUser('shopId') shopId: string,
    @Param('id') id: string,
    @Query() query: PaginationDto,
  ) {
    return this.service.getOrders(shopId, id, query);
  }

  @Post()
  create(@CurrentUser('shopId') shopId: string, @Body() dto: CreateCustomerDto) {
    return this.service.create(shopId, dto);
  }

  @Patch(':id')
  update(
    @CurrentUser('shopId') shopId: string,
    @Param('id') id: string,
    @Body() dto: UpdateCustomerDto,
  ) {
    return this.service.update(shopId, id, dto);
  }
}
