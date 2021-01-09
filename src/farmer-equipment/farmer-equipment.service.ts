import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FarmEquipmentRepository } from './farmer.equipment.repository';
import { CreateFarmerEquipmentDTO } from './dto/farmer.equipment.dto';
import { FarmerEquipment } from './farmer.equipment.entity';

@Injectable()
export class FarmerEquipmentService {
  constructor(
    @InjectRepository(FarmEquipmentRepository)
    private farmEquimentRepository: FarmEquipmentRepository,
  ) {}

  public async createEquipment(
    createFarmEquimentDto: CreateFarmerEquipmentDTO,
  ): Promise<FarmerEquipment> {
    return await this.farmEquimentRepository.createFarmEquipment(
      createFarmEquimentDto,
    );
  }
  public async getFarmerEquipments(): Promise<FarmerEquipment[]> {
    return await this.farmEquimentRepository.find();
  }

  public async getFarmerEquipment(
    equipmentId: number,
  ): Promise<FarmerEquipment> {
    const foundEquipment = await this.farmEquimentRepository.findOne(
      equipmentId,
    );
    if (!foundEquipment) {
      throw new NotFoundException('No Farmer Equipment not found');
    }
    return foundEquipment;
  }

  public async editEquipment(
    equipmentId: number,
    createFarmEquimentDto: CreateFarmerEquipmentDTO,
  ): Promise<FarmerEquipment> {
    const editedEquipment = await this.farmEquimentRepository.findOne(
      equipmentId,
    );
    if (!editedEquipment) {
      throw new NotFoundException('Equipment not found');
    }
    return this.farmEquimentRepository.editFarmerEquipment(
      createFarmEquimentDto,
      editedEquipment,
    );
  }

  public async deleteEquipment(equipmentId: number): Promise<void> {
    await this.farmEquimentRepository.delete(equipmentId);
  }
}
