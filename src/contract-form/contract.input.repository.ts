/* eslint-disable prettier/prettier */
import { Repository, EntityRepository } from 'typeorm';
import { ContractInput } from './contract.input.entity';
import { CreateContractInputDTO } from './dto/create.contract.input.dto';

@EntityRepository(ContractInput)
export class ContractInputRepository extends Repository<ContractInput> {
  public async createContractInput(
    createContractInputDTO: CreateContractInputDTO,
  ): Promise<ContractInput> {
    const { inputName, description, category, weight, quantity, unitCost, contractId } = createContractInputDTO;

    const contractInput = new ContractInput();
    contractInput.inputName = inputName;
    contractInput.description = description;
    contractInput.category= category;
    contractInput.weight = weight;
    contractInput.quantity = quantity;
    contractInput.unitCost = unitCost;
    contractInput.contractId = contractId;

    await contractInput.save();
    return contractInput;
  }

  public async editContractInput(
    createContractInputDto: CreateContractInputDTO,
    editedContractInput: ContractInput,
  ): Promise<ContractInput> {
    const { inputName, description, category, weight, quantity, unitCost, contractId } = createContractInputDto;

    editedContractInput.inputName = inputName;
    editedContractInput.description = description;
    editedContractInput.category= category;
    editedContractInput.weight = weight;
    editedContractInput.quantity = quantity;
    editedContractInput.unitCost = unitCost;
    editedContractInput.contractId = contractId;

    await editedContractInput.save();

    return editedContractInput;
  }
}