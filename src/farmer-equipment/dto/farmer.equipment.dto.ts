import { IsString, IsNumber } from 'class-validator';

export class CreateFarmerEquipmentDTO {
  @IsString()
  equipmentName: string;

  @IsString()
  identificationNumber: string;

  @IsString()
  description: string;

  @IsString()
  category: string;

  @IsNumber()
  quantity: number;

  @IsNumber()
  equipmentValue: number;

  @IsNumber()
  equipmentCapacity: number;

  @IsString()
  manufacturer: string;

  @IsNumber()
  farmerId: number;
}
