import { Controller, Get, Post, Patch, Param, Body, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';
import { GarmentTypesService } from './garment-types.service';
import { CurrentUser } from '../../common/decorators/current-user.decorator';

@ApiTags('Garment Types')
@ApiBearerAuth()
@UseGuards(AuthGuard('jwt'))
@Controller('settings/garment-types')
export class GarmentTypesController {
  constructor(private service: GarmentTypesService) {}

  @Get()
  findAll(@CurrentUser('shopId') shopId: string) { return this.service.findAll(shopId); }

  @Post()
  create(@CurrentUser('shopId') shopId: string, @Body() body: any) { return this.service.create(shopId, body); }

  @Patch(':id')
  update(@CurrentUser('shopId') shopId: string, @Param('id') id: string, @Body() body: any) {
    return this.service.update(shopId, id, body);
  }
}
