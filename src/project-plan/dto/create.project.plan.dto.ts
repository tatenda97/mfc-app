import { IsString, IsDate, IsNumber } from 'class-validator';

export class CreateProjectPlanDTO {
  @IsString()
  planName: string;

  @IsString()
  planDescription: string;

  @IsString()
  createDate: Date;

  @IsDate()
  startDate: Date;

  @IsNumber()
  duration: number;

  @IsDate()
  estimatedEndDate: Date;

  @IsNumber()
  projectId: number;

  @IsNumber()
  budget: number;
}
