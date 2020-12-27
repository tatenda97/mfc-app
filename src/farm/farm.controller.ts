import {
    Controller,
    Post,
    Body,
    Get,
    Patch,
    Param,
    Delete,
  } from '@nestjs/common';
  import { FarmService } from './farm.service';
  import { CreateFarmDTO } from './dto/create-farm.dto';
  import { Farm } from './farm.entity';

@Controller('farm')
export class FarmController {
    
constructor(private farmService: FarmService) {}

@Post('create')
public async createFarm(
  @Body() createFarmDto: CreateFarmDTO,
): Promise<Farm> {
  const farm = await this.farmService.createFarm(createFarmDto);
  return farm;
}

@Get('all')
public async getFarms(): Promise<Farm[]> {
  const farms = await this.farmService.getFarms();
  return farms;
}

@Get('/:farmId')
public async getFarmer(@Param('farmId') farmId: number) {
  const farm = await this.farmService.getFarm(farmId);
  return farm;
}

@Patch('/edit/:farmId')
public async editFarm(
  @Body() createFarmDto: CreateFarmDTO,
  @Param('farmId') farmId: number,
): Promise<Farm> {
  const farm = await this.farmService.editFarm(
    farmId,
    createFarmDto,
  );
  return farm;
}

@Delete('/delete/:farmId')
public async deleteProduct(@Param('farmId') farmId: number) {
  const deletedFarm = await this.farmService.deleteFarm(farmId);
  return deletedFarm;
}
}