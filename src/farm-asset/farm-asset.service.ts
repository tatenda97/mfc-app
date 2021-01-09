import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FarmAssetRepository } from './farm.asset.repository';
import { CreateFarmAssetDTO } from './dto/farm.asset.dto';
import { FarmAsset } from './farmer.asset.entity';

@Injectable()
export class FarmAssetService {
  constructor(
    @InjectRepository(FarmAssetRepository)
    private farmAssetRepository: FarmAssetRepository,
  ) {}

  public async createFarmAsset(
    createFarmAssetDto: CreateFarmAssetDTO,
  ): Promise<FarmAsset> {
    return await this.farmAssetRepository.createFarmAsset(createFarmAssetDto);
  }
  public async getFarmAssets(): Promise<FarmAsset[]> {
    return await this.farmAssetRepository.find();
  }

  public async getFarmAsset(farmAssetId: number): Promise<FarmAsset> {
    const foundContractForm = await this.farmAssetRepository.findOne(
      farmAssetId,
    );
    if (!foundContractForm) {
      throw new NotFoundException('No Contract Forms not found');
    }
    return foundContractForm;
  }

  public async editFarmAsset(
    farmAssetId: number,
    createFarmAssetDto: CreateFarmAssetDTO,
  ): Promise<FarmAsset> {
    const editedFarmAsset = await this.farmAssetRepository.findOne(farmAssetId);
    if (!editedFarmAsset) {
      throw new NotFoundException('Asset not found');
    }
    return this.farmAssetRepository.editFarmAsset(
      createFarmAssetDto,
      editedFarmAsset,
    );
  }

  public async deleteFarmAsset(farmAssetId: number): Promise<void> {
    await this.farmAssetRepository.delete(farmAssetId);
  }
}
