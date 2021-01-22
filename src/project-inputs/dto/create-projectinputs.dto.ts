import {IsString,IsNumber,IsDate} from 'class-validator'


export class CreateProjectInputsDto{
    @IsString()
    name:string;
    
    @IsString()
    description:string;

    @IsString()
    TotalCost: string;

    @IsDate()
    applicationdate: Date;

    @IsNumber()
    quantity:Number;















}