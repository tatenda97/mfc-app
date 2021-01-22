import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Inventory } from './inventory.entity';
import { CreateInventoryDTO } from './dto/create-inventory.dto';
import { InventoryRepository } from './inventory.repository';

@Injectable()
export class InventoryService {
  constructor(
    @InjectRepository(InventoryRepository)
    private inventoryRepository: InventoryRepository,
  ) {}

  public async createInventory(createInventoryDto: CreateInventoryDTO): Promise<Inventory> {
    return await this.inventoryRepository.createInventory(createInventoryDto);
  }

  public async getInventory(): Promise<Inventory[]> {
    return await this.inventoryRepository.find();
  }

  public async getFarmer(farmerId: number): Promise<Inventory> {
    const foundInventory = await this.inventoryRepository.findOne(farmerId);
    if (!foundInventory) {
      throw new NotFoundException('Inventory not found');
    }
    return foundInventory;
  }

  public async editInventory(
    farmerId: number,
    createInventoryDto: CreateInventoryDTO,
  ): Promise<Inventory> {
    const editedInventory = await this.inventoryRepository.findOne(Inventory);
    if (!editedInventory) {
      throw new NotFoundException('Inventory not found');
    }
    return this.inventoryRepository.editInventory(createInventoryDto, editedInventory);
  }

  public async deleteInventory(inventoryId: number): Promise<void> {
    await this.inventoryRepository.delete(inventoryId);
  }
}
