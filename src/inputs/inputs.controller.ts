import {
    Controller,
    Post,
    Body,
    Get,
    Patch,
    Param,
    Delete,
  } from '@nestjs/common';
  import { InputsService } from './inputs.service';
  import { CreateInputsDTO } from './dto/create-inputs.dto';
  import { Input } from './inputs.entity';
  
  @Controller('inputs')
  export class InputsController {
    constructor(private inputService: InputsService) {}
  
    @Post('create')
    public async createInputs(
      @Body() createInputsDto: CreateInputsDTO,
    ): Promise<Input> {
      const input = await this.inputService.createInputs(createInputsDto);
      return input;
    }
  
    @Get('all')
    public async getInputs(): Promise<Input[]> {
      const input = await this.inputService.getInputs();
      return input;
    }
  
    @Get('/:inputId')
    public async getInput(@Param('inputId') inputId: number) {
      const input = await this.inputService.getinput(inputId);
      return input;
    }
  
    @Patch('/edit/:inputId')
    public async editInput(
      @Body() CreateInputsDTO: CreateInputsDTO,
      @Param('inputId') inputId: number,
    ): Promise<Input> {
      const input = await this.inputService.editInput(
        inputId,
        CreateInputsDTO,
      );
      return input;
    }
  
    @Delete('/delete/:farmerId')
    public async deleteinput(@Param('inputId') inputId: number) {
      const deletedInput = await this.inputService.deleteInput(inputId);
      return deletedInput;
    }
  }
  