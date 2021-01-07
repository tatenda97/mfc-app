import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ContractForm } from './contract.form.entity';
import { CreateContractFormDTO } from './dto/create-contract.form.dto';
import { ContractFormRepository } from './contract.form.repository';
import { ContractInputRepository } from './contract.input.repository';
import { CreateContractInputDTO } from './dto/create.contract.input.dto';
import { ContractFormDTO } from './dto/get.contract.form.dto';
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
  ): Promise<ContractFormDTO> {
    const contractInputs = createContractFormDto.contractInputs;
    let contractFormSaved = new ContractForm();
    let contractInputsList = [];
    contractFormSaved = await this.contractFormRepository.createContractForm(
      createContractFormDto,
    );
    contractInputs.forEach(async (input) => {
      const inputDto = new CreateContractInputDTO();
      inputDto.category = input.category;
      inputDto.inputName = input.inputName;
      inputDto.contractId = contractFormSaved.id;
      inputDto.description = input.description;
      inputDto.quantity = input.quantity;
      inputDto.unitCost = input.unitCost;
      inputDto.weight = input.weight;
      let contractInput:ContractInput = await this.contractInputRepository.createContractInput(inputDto);
      contractInputsList.push(contractInput);
  
    });
   
    const contractForm = new ContractFormDTO();
    contractForm.id = contractFormSaved.id;
    contractForm.farmerName = contractFormSaved.farmerName;
    contractForm.farmerIDNumber = contractFormSaved.farmerIDNumber;
    contractForm.contactNumber = contractFormSaved.contactNumber;
    contractForm.village = contractFormSaved.village;
    contractForm.plotNumber = contractFormSaved.plotNumber;
    contractForm.contractorName = contractFormSaved.contractorName;
    contractForm.contractorID = contractFormSaved.contractorID;
    contractForm.representativeName = contractFormSaved.representativeName;
    contractForm.representativeID = contractFormSaved.representativeID;
    contractForm.representativePhoneNumber =
      contractFormSaved.representativePhoneNumber;
    contractForm.contractCategory = contractFormSaved.contractCategory;
    contractForm.contractTenure = contractFormSaved.contractTenure;
    contractForm.contractDescription = contractFormSaved.contractDescription;
    contractForm.contractValue = contractFormSaved.contractValue;
    contractForm.repaymentValue = contractFormSaved.repaymentValue;
    contractForm.applicationDate = contractFormSaved.applicationDate;
    contractForm.contractInputs = contractInputsList;
    let inputList:ContractInput[] = await this.contractInputRepository.getByContractId(contractFormSaved.id);
    contractForm.contractInputs = inputList;


    return contractForm;
  }
  public async getContactForms(): Promise<ContractForm[]> {
    return await this.contractFormRepository.find({relations: ["contract_input"]});
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
