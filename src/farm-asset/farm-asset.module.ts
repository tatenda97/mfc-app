import { Module } from '@nestjs/common';
import { FarmAssetService } from './farm-asset.service';
import { FarmAssetController } from './farm-asset.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FarmAssetRepository } from './farm.asset.repository';

@Module({
  imports: [TypeOrmModule.forFeature([FarmAssetRepository])],
  providers: [FarmAssetService],
  controllers: [FarmAssetController],
})
export class FarmAssetModule {}
