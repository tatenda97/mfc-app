import {IsString,IsNumber,IsDate, IsBoolean} from 'class-validator'

export class CreateInventoryDTO{
    @IsString()
    inventoryName: string;

    @IsString()
    description:string;

    @IsDate()
    receivedDate:Date;

    @IsString()
    supplierName:string;

    @IsBoolean()
    availableInStore:Boolean;

    @IsDate()
    creationDate:Date;

    @IsNumber()
    quantity:Number;

    @IsDate()
    dispatchDate:Date;











    
}