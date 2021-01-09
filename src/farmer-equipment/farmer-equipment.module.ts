import { Module } from '@nestjs/common';
import { FarmerEquipmentService } from './farmer-equipment.service';
import { FarmerEquipmentController } from './farmer-equipment.controller';

@Module({
  providers: [FarmerEquipmentService],
  controllers: [FarmerEquipmentController]
})
export class FarmerEquipmentModule {}
