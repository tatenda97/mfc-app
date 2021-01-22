import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Input } from './inputs.entity';
import { CreateInputsDTO } from './dto/create-inputs.dto';
import { InputsRepository } from './inputs.repository';

@Injectable()
export class InputsService {
  constructor(
    @InjectRepository(InputsRepository)
    private inputsRepository: InputsRepository,
  ) {}

  public async createInputs(createInputsDto: CreateInputsDTO): Promise<Input> {
    return await this.inputsRepository.createInputs(createInputsDto);
  }

  public async getInputs(): Promise<Input[]> {
    return await this.inputsRepository.find();
  }

  public async getinput(inputId: number): Promise<Input> {
    const foundinput = await this.inputsRepository.findOne(inputId);
    if (!foundinput) {
      throw new NotFoundException('Input not found');
    }
    return foundinput;
  }

  public async editInput(
    inputId: number,
    createInputsDto: CreateInputsDTO,
  ): Promise<Input> {
    const editedinput = await this.inputsRepository.findOne(inputId);
    if (!editedinput) {
      throw new NotFoundException('input not found');
    }
    return this.inputsRepository.editInputs(createInputsDto, editedinput);
  }

  public async deleteInput(inputId: number): Promise<void> {
    await this.inputsRepository.delete(inputId);
  }
}
