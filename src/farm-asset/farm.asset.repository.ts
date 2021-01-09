/* eslint-disable prettier/prettier */
import { Repository, EntityRepository } from 'typeorm';

import { FarmAsset } from './farmer.asset.entity';
import { CreateFarmAssetDTO } from './dto/farm.asset.dto';

@EntityRepository(FarmAsset)
export class FarmAssetRepository extends Repository<FarmAsset> {

  public async createFarmAsset(
    createFarmAssetDto:CreateFarmAssetDTO,
  ): Promise<FarmAsset> {
    const { assetName, description, category, assetMake,assetValue, quantity, assertCapacity,identificationNumber, farmId } = createFarmAssetDto;

    const farmAsset = new FarmAsset();
    farmAsset.assetName = assetName;
    farmAsset.description = description;
    farmAsset.category= category;
    farmAsset.assetMake = assetMake;
    farmAsset.quantity = quantity;
    farmAsset.assertCapacity = assertCapacity;
    farmAsset.farmId = farmId;
    farmAsset.assetValue = assetValue;
    farmAsset.identificationNumber= identificationNumber;

    await farmAsset.save();
    return farmAsset;
  }

  public async editFarmAsset(
    createFarmAssetDto: CreateFarmAssetDTO,
    editFarmAsset: FarmAsset,
  ): Promise<FarmAsset> {
    const { assetName, description, category, assetMake,assetValue, quantity, assertCapacity, farmId } = createFarmAssetDto;

    editFarmAsset.assetName = assetName;
    editFarmAsset.description = description;
    editFarmAsset.category= category;
    editFarmAsset.assetMake = assetMake;
    editFarmAsset.quantity = quantity;
    editFarmAsset.assertCapacity = assertCapacity;
    editFarmAsset.farmId = farmId;
    editFarmAsset.assetValue = assetValue;

    await editFarmAsset.save();

    return editFarmAsset;
  }

}