import { Module } from '@nestjs/common';
import { FarmerService } from './farmer.service';
import { FarmerController } from './farmer.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FarmerRepository } from './farmer.repository';

@Module({
  imports: [TypeOrmModule.forFeature([FarmerRepository])],
  providers: [FarmerService],
  controllers: [FarmerController],
})
export class FarmerModule {}
