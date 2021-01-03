import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ContractForm } from './contract.form.entity';
import { CreateContractFormDTO } from './dto/create-contract.form.dto';
import { ContractFormRepository } from './contract.form.repository';
import { ContractInputRepository } from './contract.input.repository';
import { CreateContractInputDTO } from './dto/create.contract.input.dto';
import { ContractInput } from './contract.input.entity';

@Injectable()
export class ContractFormService {
  constructor(
    @InjectRepository(ContractFormRepository)
    private contractFormRepository: ContractFormRepository,
    private contractInputRepository: ContractInputRepository,
  ) {}

  public async createContractForm(
    createContractFormDto: CreateContractFormDTO,
  ): Promise<ContractForm> {
    const contractInputs = createContractFormDto.contractInputs;
    let contractForm = new ContractForm();
    contractForm = await this.contractFormRepository.createContractForm(
      createContractFormDto,
    );
    contractInputs.forEach(async (input) => {
      const inputDto = new CreateContractInputDTO();
      inputDto.category = input.category;
      inputDto.inputName = input.inputName;
      inputDto.contractId = contractForm.id;
      inputDto.description = input.description;
      inputDto.quantity = input.quantity;
      inputDto.unitCost = input.unitCost;
      inputDto.weight = input.weight;
      contractForm.inputs.push(
        await this.contractInputRepository.createContractInput(inputDto),
      );
    });
    return contractForm;
  }

  public async getContactForms(): Promise<ContractForm[]> {
    return await this.contractFormRepository.find();
  }

  public async getContractForm(contractFormId: number): Promise<ContractForm> {
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
