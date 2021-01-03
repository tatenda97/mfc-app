import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Farmer } from './farmer.entity';
import { CreateFarmerDTO } from './dto/create-farmer.dto';
import { FarmerRepository } from './farmer.repository';

@Injectable()
export class FarmerService {
  constructor(
    @InjectRepository(FarmerRepository)
    private farmerRepository: FarmerRepository,
  ) {}

  public async createFarmer(createFarmerDto: CreateFarmerDTO): Promise<Farmer> {
    return await this.farmerRepository.createFarmer(createFarmerDto);
  }

  public async getFarmers(): Promise<Farmer[]> {
    return await this.farmerRepository.find();
  }

  public async getFarmer(farmerId: number): Promise<Farmer> {
    const foundFarmer = await this.farmerRepository.findOne(farmerId);
    if (!foundFarmer) {
      throw new NotFoundException('Farmer not found');
    }
    return foundFarmer;
  }

  public async editFarmer(
    farmerId: number,
    createFarmerDto: CreateFarmerDTO,
  ): Promise<Farmer> {
    const editedFarmer = await this.farmerRepository.findOne(farmerId);
    if (!editedFarmer) {
      throw new NotFoundException('Farmer not found');
    }
    return this.farmerRepository.editFarmer(createFarmerDto, editedFarmer);
  }

  public async deleteFarmer(farmerId: number): Promise<void> {
    await this.farmerRepository.delete(farmerId);
  }
}
