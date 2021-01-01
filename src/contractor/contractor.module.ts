import { Module } from '@nestjs/common';
import { ContractorService } from './contractor.service';
import { ContractorController } from './contractor.controller';
import { ContractorRepository } from './contractor.repository';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([ContractorRepository])],
  providers: [ContractorService],
  controllers: [ContractorController]
})
export class ContractorModule {}
