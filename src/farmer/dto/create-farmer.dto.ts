import { IsString, IsDate } from 'class-validator';

export class CreateFarmerDTO {
  @IsString()
  name: string;

  @IsString()
  surname: string;

  @IsString()
  nationalID: string;

  @IsString()
  gender: string;

  @IsDate()
  dateOfBirth: Date;

  @IsString()
  description: string;
}