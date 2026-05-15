import { IsString, IsEnum, IsObject } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { MeasurementCategory } from '@oxilo/database';

export class CreateMeasurementDto {
  @ApiProperty() @IsString() label: string;
  @ApiProperty({ enum: MeasurementCategory }) @IsEnum(MeasurementCategory) category: MeasurementCategory;
  @ApiProperty() @IsObject() fields: Record<string, number | string>;
}
