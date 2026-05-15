import { Module } from '@nestjs/common';
import { GarmentTypesController } from './garment-types.controller';
import { GarmentTypesService } from './garment-types.service';
import { ShopController } from './shop.controller';
import { DatabaseModule } from '../../database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [GarmentTypesController, ShopController],
  providers: [GarmentTypesService],
})
export class GarmentTypesModule {}
