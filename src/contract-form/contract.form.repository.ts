import { Repository, EntityRepository } from 'typeorm';
import { ContractForm } from './contract.form.entity';
import { CreateContractFormDTO } from './dto/create-contract.form.dto';

@EntityRepository(ContractForm)
export class ContractFormRepository extends Repository<ContractForm> {
  public async createContractForm(
    createContractFormDto: CreateContractFormDTO,
  ): Promise<ContractForm> {
    const {
      farmerName,
      farmerIDNumber,
      contactNumber,
      village,
      plotNumber,
      contractorName,
      contractorID,
      representativeName,
      representativeID,
      representativePhoneNumber,
      contractCategory,
      contractTenure,
      contractDescription,
      contractValue,
      repaymentValue,
      applicationDate,
    } = createContractFormDto;

    const contractForm = new ContractForm();
    contractForm.farmerName = farmerName;
    contractForm.farmerIDNumber = farmerIDNumber;
    contractForm.contactNumber = contactNumber;
    contractForm.village = village;
    contractForm.plotNumber = plotNumber;
    contractForm.contractorName = contractorName;
    contractForm.contractorID = contractorID;
    contractForm.representativeName = representativeName;
    contractForm.representativeID = representativeID;
    contractForm.representativePhoneNumber = representativePhoneNumber;
    contractForm.contractCategory = contractCategory;
    contractForm.contractTenure = contractTenure;
    contractForm.contractDescription = contractDescription;
    contractForm.contractValue = contractValue;
    contractForm.repaymentValue = repaymentValue;
    contractForm.applicationDate = applicationDate;

    await contractForm.save();
    return contractForm;
  }

  public async editContractForm(
    createContractFormDto: CreateContractFormDTO,
    editedContractForm: ContractForm,
  ): Promise<ContractForm> {
    const {
      farmerName,
      farmerIDNumber,
      contactNumber,
      village,
      plotNumber,
      contractorName,
      contractorID,
      representativeName,
      representativeID,
      representativePhoneNumber,
      contractCategory,
      contractTenure,
      contractDescription,
      contractValue,
      repaymentValue,
      applicationDate,
    } = createContractFormDto;

    editedContractForm.farmerName = farmerName;
    editedContractForm.farmerIDNumber = farmerIDNumber;
    editedContractForm.contactNumber = contactNumber;
    editedContractForm.village = village;
    editedContractForm.plotNumber = plotNumber;
    editedContractForm.contractorName = contractorName;
    editedContractForm.contractorID = contractorID;
    editedContractForm.representativeName = representativeName;
    editedContractForm.representativeID = representativeID;
    editedContractForm.representativePhoneNumber = representativePhoneNumber;
    editedContractForm.contractCategory = contractCategory;
    editedContractForm.contractTenure = contractTenure;
    editedContractForm.contractDescription = contractDescription;
    editedContractForm.contractValue = contractValue;
    editedContractForm.repaymentValue = repaymentValue;
    editedContractForm.applicationDate = applicationDate;

    await editedContractForm.save();

    return editedContractForm;
  }
}
