import { IsString, IsDate, IsNumber, IsArray } from 'class-validator';
import { ContractInput } from '../contract.input.entity';

export class ContractFormDTO {
  @IsNumber()
  id: number;

  @IsString()
  farmerName: string;

  @IsString()
  farmerIDNumber: string;

  @IsString()
  contactNumber: string;

  @IsString()
  village: string;

  @IsString()
  plotNumber: string;

  @IsString()
  contractorName: string;

  @IsString()
  contractorID: string;

  @IsString()
  representativeName: string;

  @IsString()
  representativeID: string;

  @IsString()
  representativePhoneNumber: string;

  @IsString()
  contractCategory: string;

  @IsString()
  contractTenure: string;

  @IsString()
  contractDescription: string;

  @IsNumber()
  contractValue: number;

  @IsNumber()
  repaymentValue: number;

  @IsDate()
  applicationDate: Date;

  @IsArray()
  contractInputs: ContractInput[];
}
