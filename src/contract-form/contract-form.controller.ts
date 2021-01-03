import {
  Controller,
  Post,
  Body,
  Get,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ContractFormService } from './contract-form.service';
import { CreateContractFormDTO } from './dto/create-contract.form.dto';
import { ContractForm } from './contract.form.entity';

@Controller('contract-form')
export class ContractFormController {
  constructor(private contractFormService: ContractFormService) {}

  @Post('create')
  public async createContractForm(
    @Body() createContractFormDto: CreateContractFormDTO,
  ): Promise<CreateContractFormDTO> {
    const contractForm = await this.contractFormService.createContractForm(
      createContractFormDto,
    );
    return contractForm;
  }

  @Get('all')
  public async getFarmers(): Promise<ContractForm[]> {
    const contractForms = await this.contractFormService.getContactForms();
    return contractForms;
  }

  @Get('/:contractId')
  public async getFarmer(@Param('contractId') contractId: number) {
    const contractForm = await this.contractFormService.getContractForm(
      contractId,
    );
    return contractForm;
  }

  @Patch('/edit/:contractId')
  public async editContractForm(
    @Body() createContractFormDto: CreateContractFormDTO,
    @Param('contractId') contractId: number,
  ): Promise<ContractForm> {
    const contractForm = await this.contractFormService.editContractForm(
      contractId,
      createContractFormDto,
    );
    return contractForm;
  }

  @Delete('/delete/:contractId')
  public async deleteContractForm(@Param('contractId') contractId: number) {
    const deletedContractForm = await this.contractFormService.deleteContractForm(
      contractId,
    );
    return deletedContractForm;
  }
}
