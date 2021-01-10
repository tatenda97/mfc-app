import { IsString, IsDate, IsNumber } from 'class-validator';
export class CreateProjectDTO{

     @IsString()
    projectName: string;
  
    @IsString()
    projectDescription: string;
  
    @IsNumber()
    duration: number;
  
    @IsDate()
    startDate: Date;
  
    @IsDate()
    endDate: Date;
  
     @IsNumber()
    projectContractorId: number;

     @IsString()
    projectType: string;
  
    @IsString()
    projectManagerId: number;
    
     @IsNumber()
    ownerId: number;
  
  }