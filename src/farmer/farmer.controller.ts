import {
    Controller,
    Post,
    Body,
    Get,
    Patch,
    Param,
    Delete,
  } from '@nestjs/common';
  import { FarmerService } from './farmer.service';
  import { CreateFarmerDTO } from './dto/create-farmer.dto';
  import { Farmer } from './farmer.entity';

@Controller('farmer')
export class FarmerController {
    
constructor(private farmerService: FarmerService) {}

@Post('create')
public async createFarmer(
  @Body() createFarmerDto: CreateFarmerDTO,
): Promise<Farmer> {
  const product = await this.farmerService.createFarmer(createFarmerDto);
  return product;
}

@Get('all')
public async getFarmers(): Promise<Farmer[]> {
  const farmers = await this.farmerService.getFarmers();
  return farmers;
}

@Get('/:farmerId')
public async getFarmer(@Param('farmerId') farmerId: number) {
  const farmer = await this.farmerService.getFarmer(farmerId);
  return farmer;
}

@Patch('/edit/:farmerId')
public async editFarmer(
  @Body() createFarmerDto: CreateFarmerDTO,
  @Param('farmerId') farmerId: number,
): Promise<Farmer> {
  const farmer = await this.farmerService.editFarmer(
    farmerId,
    createFarmerDto,
  );
  return farmer;
}

@Delete('/delete/:farmerId')
public async deleteProduct(@Param('farmerId') farmerId: number) {
  const deletedFarmer = await this.farmerService.deleteFarmer(farmerId);
  return deletedFarmer;
}
}
