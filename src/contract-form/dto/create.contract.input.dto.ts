import { IsString, IsNumber } from 'class-validator';

export class CreateContractInputDTO {
  @IsString()
  name: string;

  @IsString()
  inputName: string;

  @IsString()
  description: string;

  @IsString()
  category: string;

  @IsNumber()
  quantity: number;

  @IsNumber()
  weight: number;

  @IsNumber()
  unitCost: number;

  @IsNumber()
  contractId: number;
}
