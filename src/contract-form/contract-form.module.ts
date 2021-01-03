import { Module } from '@nestjs/common';
import { ContractFormService } from './contract-form.service';

@Module({
  providers: [ContractFormService]
})
export class ContractFormModule {}
