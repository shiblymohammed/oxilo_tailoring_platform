import {
  IsString, IsOptional, IsEnum, IsDateString, IsArray,
  IsNumber, ValidateNested, IsBoolean, Min,
} from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Priority } from '@oxilo/database';

class AddOnDto {
  @IsString() name: string;
  @IsNumber() price: number;
}

class OrderItemDto {
  @ApiProperty() @IsString() garmentTypeId: string;
  @ApiPropertyOptional() @IsOptional() @IsString() measurementProfileId?: string;
  @ApiPropertyOptional() @IsOptional() @IsNumber() @Min(1) quantity?: number;
  @ApiProperty() @IsNumber() @Min(0) unitPrice: number;
  @ApiPropertyOptional({ type: [AddOnDto] })
  @IsOptional() @IsArray() @ValidateNested({ each: true }) @Type(() => AddOnDto)
  addOns?: AddOnDto[];
  @ApiPropertyOptional() @IsOptional() @IsString() notes?: string;
}

export class CreateOrderDto {
  @ApiProperty() @IsString() customerId: string;
  @ApiProperty({ enum: Priority }) @IsOptional() @IsEnum(Priority) priority?: Priority;
  @ApiProperty() @IsDateString() deliveryDate: string;
  @ApiPropertyOptional() @IsOptional() @IsString() assignedToId?: string;
  @ApiPropertyOptional() @IsOptional() @IsNumber() @Min(0) advancePaid?: number;
  @ApiPropertyOptional() @IsOptional() @IsString() notes?: string;
  @ApiPropertyOptional() @IsOptional() @IsBoolean() isAlteration?: boolean;

  @ApiProperty({ type: [OrderItemDto] })
  @IsArray() @ValidateNested({ each: true }) @Type(() => OrderItemDto)
  items: OrderItemDto[];
}
