import {
  Controller,
  Post,
  Body,
  Get,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';

import { FarmAssetService } from './farm-asset.service';
import { CreateFarmAssetDTO } from './dto/farm.asset.dto';
import { FarmAsset } from './farmer.asset.entity';

@Controller('farm-asset')
export class FarmAssetController {
  constructor(private farmAssetService: FarmAssetService) {}

  @Post('create')
  public async createFarmAsset(
    @Body() createFarmAssetDto: CreateFarmAssetDTO,
  ): Promise<FarmAsset> {
    const farmAsset = await this.farmAssetService.createFarmAsset(
      createFarmAssetDto,
    );
    return farmAsset;
  }

  @Get('all')
  public async getFarmAsset(): Promise<FarmAsset[]> {
    const farmAssets = await this.farmAssetService.getFarmAssets();
    return farmAssets;
  }

  @Get('/:farmAssetId')
  public async getFarmer(@Param('farmAssetId') farmAssetId: number) {
    const farmAsset = await this.farmAssetService.getFarmAsset(farmAssetId);
    return farmAsset;
  }

  @Patch('/edit/:farmAssetId')
  public async editContractForm(
    @Body() createFarmAssetDto: CreateFarmAssetDTO,
    @Param('farmAssetId') farmAssetId: number,
  ): Promise<FarmAsset> {
    const farmAsset = await this.farmAssetService.editFarmAsset(
      farmAssetId,
      createFarmAssetDto,
    );
    return farmAsset;
  }

  @Delete('/delete/:farmAssetId')
  public async deleteContractForm(@Param('farmAssetId') farmAssetId: number) {
    const deletedFarmAsset = await this.farmAssetService.deleteFarmAsset(
      farmAssetId,
    );
    return deletedFarmAsset;
  }
}
