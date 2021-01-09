import {
  Controller,
  Post,
  Body,
  Get,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { FarmerEquipmentService } from './farmer-equipment.service';
import { CreateFarmerEquipmentDTO } from './dto/farmer.equipment.dto';
import { FarmerEquipment } from './farmer.equipment.entity';

@Controller('farmer-equipment')
export class FarmerEquipmentController {
  constructor(private equipmentService: FarmerEquipmentService) {}

  @Post('create')
  public async createFarmAsset(
    @Body() createFarmerEquipmentDto: CreateFarmerEquipmentDTO,
  ): Promise<FarmerEquipment> {
    const farmerEquipment = await this.equipmentService.createEquipment(
      createFarmerEquipmentDto,
    );
    return farmerEquipment;
  }

  @Get('all')
  public async getFarmAsset(): Promise<FarmerEquipment[]> {
    const equipment = await this.equipmentService.getFarmerEquipments();
    return equipment;
  }

  @Get('/:equipmentId')
  public async getFarmer(@Param('equipmentId') equipmentId: number) {
    const farmAsset = await this.equipmentService.getFarmerEquipment(
      equipmentId,
    );
    return farmAsset;
  }

  @Patch('/edit/:equipmentId')
  public async editContractForm(
    @Body() createFarmerEquipmentDto: CreateFarmerEquipmentDTO,
    @Param('equipmentId') equipmentId: number,
  ): Promise<FarmerEquipment> {
    const equipment = await this.equipmentService.editEquipment(
      equipmentId,
      createFarmerEquipmentDto,
    );
    return equipment;
  }

  @Delete('/delete/:equipmentId')
  public async deleteEquimentId(@Param('equipmentId') equipmentId: number) {
    const deletedEquipment = await this.equipmentService.deleteEquipment(
      equipmentId,
    );
    return deletedEquipment;
  }
}
