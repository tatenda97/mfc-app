import { Module } from '@nestjs/common';
import { FarmService } from './farm.service';
import { FarmController } from './farm.controller';
import { FarmerRepository } from '../farmer/farmer.repository';
import { FarmRepository } from './farm.repository';


@Module({
  providers: [FarmService,FarmerRepository,FarmRepository],
  controllers: [FarmController]
  
})
export class FarmModule {}
