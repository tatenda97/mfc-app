import { Repository, EntityRepository } from 'typeorm';
import { Input } from './inputs.entity';
import { CreateInputsDTO } from './dto/create-inputs.dto';

@EntityRepository(Input)
export class InputsRepository extends Repository<Input> {
  public async createInputs(createInputsDto: CreateInputsDTO): Promise<Input> {
    const {
      inputname,
      inputdescription,
      purchasedate,
      purchasevalue,
      usefullife,
      inputId,
    } = createInputsDto;

    const input = new Input();
    input.inputName = inputname;
    input.inputDescription = inputdescription;
    input.purchaseDate = purchasedate;
    input.purchaseValue = purchasevalue;
    input.usefulLife = usefullife;
    input.inputId = inputId;

    await input.save();
    return input;
  }

  public async editInputs(
    createInputsDto: CreateInputsDTO,
    editedInputs: Input,
  ): Promise<Input> {
    const {
        inputname,
        inputdescription,
        purchasedate,
        purchasevalue,
        usefullife,
        inputId,
    } = createInputsDto;

    editedInputs.inputName = inputname;
    editedInputs.inputDescription = inputdescription;
    editedInputs.purchaseDate = purchasedate;
    editedInputs.purchaseValue = purchasevalue;
    editedInputs.usefulLife = usefullife;
    editedInputs.inputId = inputId;
    

    await editedInputs.save();

    return editedInputs;
  }
}
