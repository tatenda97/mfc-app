import { IsString, IsDate, IsNumber } from 'class-validator';

export class CreateInputsDTO {
  @IsString()
  inputname: string;

  @IsString()
  inputdescription: string;

  @IsDate()
  purchasedate: Date;

  @IsString()
  purchasevalue: string;

  @IsNumber()
  usefullife: Number;
  
  @IsNumber()
  inputId: Number;

}
 
