import { IsString } from 'class-validator';

export class CreateContractDTO {
    @IsString()
    contractorName: string;
  
    @IsString()
    description: string;
  
    @IsString()
    category: string;
  
    @IsString()
    address: string;
  
    @IsString()
    phoneNumber: string;
  
    @IsString()
    contactPerson: string;
}