import { IsString, IsNumber, IsDate } from "class-validator";

export class CreateProjectActivityDto  {

   @IsString()
    activityName: string;
  
    @IsString()
    activityDescription: string;
    
    @IsString()
    activityStatus: string;
  
    @IsNumber()
    duration: number;
  
    @IsDate()
    startDate: Date;
  
    @IsDate()
    endDate: Date;
  
    @IsString()
    requirementId: string;
  
    @IsNumber()
    projectManagerId: number;
    
    @IsNumber()
    projectId: number;

  }