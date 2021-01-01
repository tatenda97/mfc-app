import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Contractor } from './contractor.entity';
import { CreateContractorDTO } from './dto/create-contractor.dto';
import { ContractorRepository } from './contractor.repository';

@Injectable()
export class ContractorService {
  constructor(
    @InjectRepository(ContractorRepository)
    private contractorRepository: ContractorRepository,
  ) {}

  public async createContractor(
    createContractorDto: CreateContractorDTO,
  ): Promise<Contractor> {
    return await this.contractorRepository.createContractor(createContractorDto);
  }


  public async getContractors(): Promise<Contractor[]> {
    return await this.contractorRepository.find();
  }


  public async getContractor(contractorId: number): Promise<Contractor> {
    const foundContractor = await this.contractorRepository.findOne(contractorId);
    if (!foundContractor) {
      throw new NotFoundException('Contractor not found');
    }
    return foundContractor;
  }


  public async editContractor(
    contractorId: number,
    createContractorDto: CreateContractorDTO,
  ): Promise<Contractor> {
    const editedContractor = await this.contractorRepository.findOne(contractorId);
    if (!editedContractor) {
      throw new NotFoundException('Contractor not found');
    }
    return this.contractorRepository.editContractor(createContractorDto, editedContractor);
  }

  public async deleteContractor(contractId: number): Promise<void> {
    await this.contractorRepository.delete(contractId);
  }
}

