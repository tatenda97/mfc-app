import { Module } from '@nestjs/common';
import { ContractFormService } from './contract-form.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContractFormRepository } from './contract.form.repository';
import { ContractInputRepository } from './contract.input.repository';
import { ContractFormController } from './contract-form.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([ContractFormRepository, ContractInputRepository]),
  ],
  providers: [ContractFormService],
  controllers: [ContractFormController],
})
export class ContractFormModule {}
