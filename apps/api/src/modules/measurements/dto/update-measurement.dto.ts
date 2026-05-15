import { IsOptional, IsString, IsObject } from 'class-validator';

export class UpdateMeasurementDto {
  @IsOptional() @IsString() label?: string;
  @IsOptional() @IsObject() fields?: Record<string, number | string>;
}
