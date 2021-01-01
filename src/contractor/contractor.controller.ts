import {
    Controller,
    Post,
    Body,
    Get,
    Patch,
    Param,
    Delete,
  } from '@nestjs/common';
  import { ContractorService } from './contractor.service';
  import { CreateContractorDTO } from './dto/create-contractor.dto';
  import { Contractor } from './contractor.entity';
  
  @Controller('contractor')
  export class ContractorController {
    constructor(private contractorService: ContractorService) {}
  
    @Post('create')
    public async createContractor(
      @Body() createContractorDto: CreateContractorDTO,
    ): Promise<Contractor> {
      const contractor = await this.contractorService.createContractor(createContractorDto);
      return contractor;
    }
  
    @Get('all')
    public async getContractors(): Promise<Contractor[]> {
      const contractors = await this.contractorService.getContractors();
      return contractors;
    }
  
    @Get('/:contractorId')
    public async getContractor(@Param('contractorId') contractorId: number) {
      const contractor = await this.contractorService.getContractor(contractorId);
      return contractor;
    }
  
    @Patch('/edit/:contractorId')
    public async editContractor(
      @Body() createContractDto: CreateContractorDTO,
      @Param('contractorId') contractorId: number,
    ): Promise<Contractor> {
      const contractor = await this.contractorService.editContractor(
        contractorId,
        createContractDto,
      );
      return contractor;
    }
  
    @Delete('/delete/:contractorId')
    public async deleteContractor(@Param('contractId') contractorId: number) {
      const deletedContractor = await this.contractorService.deleteContractor(contractorId);
      return deletedContractor;
    }
  }

