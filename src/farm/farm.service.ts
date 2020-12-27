import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Farm } from './farm.entity';
import { CreateFarmDTO } from './dto/create-farm.dto';
import { FarmRepository } from './farm.repository';
import { FarmerRepository } from 'src/farmer/farmer.repository';

@Injectable()
export class FarmService {
  constructor(
    @InjectRepository(FarmRepository)
    private farmRepository: FarmRepository,
    private farmerRepository:FarmerRepository,
  ) {}

  public async createFarm(
    createFarmDto: CreateFarmDTO,
  ): Promise<Farm> {

      // check if the farmer is present in the database
     const farmer = this.farmerRepository.find()
     if(!farmer){
        throw new NotFoundException('Farmer with not found');  
     }
    return await this.farmRepository.createFarm(createFarmDto);
  }

  public async getFarms(): Promise<Farm[]> {
    return await this.farmRepository.find();
  }


  public async getFarm(farmId: number): Promise<Farm> {
    const foundFarm = await this.farmRepository.findOne(farmId);
    if (!foundFarm) {
      throw new NotFoundException('Farm not found');
    }
    return foundFarm;
  }


  public async editFarm(
    farmId: number,
    createFarmDto: CreateFarmDTO,
  ): Promise<Farm> {
    const editedFarm = await this.farmRepository.findOne(farmId);
    if (!editedFarm) {
      throw new NotFoundException('Farm not found');
    }
    return this.farmRepository.editFarm(createFarmDto, editedFarm);
  }


  public async deleteFarm(farmId: number): Promise<void> {
    await this.farmRepository.delete(farmId);
  }
}