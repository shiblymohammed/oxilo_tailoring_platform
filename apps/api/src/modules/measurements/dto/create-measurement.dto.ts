import { IsString, IsObject } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateMeasurementDto {
  @ApiProperty() @IsString() label: string;
  @ApiProperty() @IsString() garmentTypeId: string;
  @ApiProperty() @IsObject() fields: Record<string, any>;
}
