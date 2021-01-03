import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ContractForm } from './contract.form.entity';
import { CreateContractFormDTO } from './dto/create-contract.form.dto';
import { ContractFormRepository } from './contract.form.repository';

@Injectable()
export class ContractFormService {
  constructor(
    @InjectRepository(ContractFormRepository)
    private contractFormRepository: ContractFormRepository,
  ) {}

  public async createContractForm(
    createContractFormDto: CreateContractFormDTO,
  ): Promise<ContractForm> {
    return await this.contractFormRepository.createContractForm(
      createContractFormDto,
    );
  }

  public async getContactForms(): Promise<ContractForm[]> {
    return await this.contractFormRepository.find();
  }

  public async getContactForm(contractFormId: number): Promise<ContractForm> {
    const foundContractForm = await this.contractFormRepository.findOne(
      contractFormId,
    );
    if (!foundContractForm) {
      throw new NotFoundException('No Contract Forms not found');
    }
    return foundContractForm;
  }

  public async editContractForm(
    contractFormId: number,
    createContractFormDto: CreateContractFormDTO,
  ): Promise<ContractForm> {
    const editedContractForm = await this.contractFormRepository.findOne(
      contractFormId,
    );
    if (!editedContractForm) {
      throw new NotFoundException('Contract Form not found');
    }
    return this.contractFormRepository.editContractForm(
      createContractFormDto,
      editedContractForm,
    );
  }

  public async deleteContractForm(farmerId: number): Promise<void> {
    await this.contractFormRepository.delete(farmerId);
  }
}
