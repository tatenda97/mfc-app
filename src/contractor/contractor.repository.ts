import { Repository, EntityRepository } from 'typeorm';
import { Contractor } from './contractor.entity';
import { CreateContractorDTO } from './dto/create-contractor.dto';

@EntityRepository(Contractor)
export class ContractorRepository extends Repository<Contractor> {

  public async createContractor(
    createContractorDto: CreateContractorDTO,
  ): Promise<Contractor> {
    const { contractorName, description, address,category,phoneNumber,contactPerson } = createContractorDto;

    const contractor = new Contractor();
    contractor.contractorName = contractorName;
    contractor.description = description;
    contractor.contactPerson= contactPerson;
    contractor.address = address;
    contractor.category = category;
    contractor.phoneNumber = phoneNumber;

    await contractor.save();
    return contractor;
  }

  public async editContractor(
    createContractorDto: CreateContractorDTO,
    editedContractor: Contractor,
  ): Promise<Contractor> {
    const { contractorName, description, address,category,phoneNumber,contactPerson } = createContractorDto;
    editedContractor.contractorName = contractorName;
    editedContractor.description = description;
    editedContractor.contactPerson= contactPerson;
    editedContractor.address = address;
    editedContractor.category = category;
    editedContractor.phoneNumber = phoneNumber;
    await editedContractor.save();

    return editedContractor;
  }
}