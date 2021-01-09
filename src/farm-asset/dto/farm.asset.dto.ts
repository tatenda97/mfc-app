import { IsString, IsNumber } from 'class-validator';

export class CreateFarmAssetDTO {
  @IsString()
  assetName: string;

  @IsString()
  identificationNumber: string;

  @IsString()
  description: string;

  @IsString()
  category: string;

  @IsNumber()
  quantity: number;

  @IsNumber()
  assetValue: number;

  @IsNumber()
  assertCapacity: number;

  @IsString()
  assetMake: string;

  @IsNumber()
  farmId: number;
}
