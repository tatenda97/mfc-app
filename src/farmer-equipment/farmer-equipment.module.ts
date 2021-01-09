import { Module } from '@nestjs/common';
import { FarmerEquipmentService } from './farmer-equipment.service';
import { FarmerEquipmentController } from './farmer-equipment.controller';
import { FarmEquipmentRepository } from './farmer.equipment.repository';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([FarmEquipmentRepository])],
  providers: [FarmerEquipmentService],
  controllers: [FarmerEquipmentController],
})
export class FarmerEquipmentModule {}
