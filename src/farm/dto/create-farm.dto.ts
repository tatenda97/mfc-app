import { IsString,IsNumber } from 'class-validator';

export class CreateFarmDTO {

@IsString()
name: string;

@IsString()
description: string;

@IsString()
plotNumber: string;

@IsString()
ownerId: string;

}