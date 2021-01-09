/* eslint-disable prettier/prettier */
import { Repository, EntityRepository } from 'typeorm';

import { CreateFarmerEquipmentDTO } from './dto/farmer.equipment.dto';
import { FarmerEquipment } from './farmer.equipment.entity';

@EntityRepository(FarmerEquipment)
export class FarmEquipmentRepository extends Repository<FarmerEquipment> {

  public async createFarmEquipment(
    createFarmerEquipmentDto:CreateFarmerEquipmentDTO,
  ): Promise<FarmerEquipment> {
    const { equipmentName, description, category, manufacturer,equipmentValue, quantity, equipmentCapacity,identificationNumber, farmerId } = createFarmerEquipmentDto;

    const farmerEquipment = new FarmerEquipment();
    farmerEquipment.equipmentName = equipmentName;
    farmerEquipment.description = description;
    farmerEquipment.category= category;
    farmerEquipment.manufacturer = manufacturer;
    farmerEquipment.quantity = quantity;
    farmerEquipment.equipmentCapacity = equipmentCapacity;
    farmerEquipment.farmerId = farmerId;
    farmerEquipment.equipmentValue = equipmentValue;
    farmerEquipment.identificationNumber= identificationNumber;

    await farmerEquipment.save();
    return farmerEquipment;
  }

  public async editFarmerEquipment(
    createFarmerEquipmentDto: CreateFarmerEquipmentDTO,
    editedFarmEquiment: FarmerEquipment,
  ): Promise<FarmerEquipment> {
    const { equipmentName, description, category, manufacturer,equipmentValue, quantity, equipmentCapacity,identificationNumber, farmerId } = createFarmerEquipmentDto;

    editedFarmEquiment.equipmentName = equipmentName;
    editedFarmEquiment.description = description;
    editedFarmEquiment.category= category;
    editedFarmEquiment.manufacturer = manufacturer;
    editedFarmEquiment.quantity = quantity;
    editedFarmEquiment.equipmentCapacity = equipmentCapacity;
    editedFarmEquiment.farmerId = farmerId;
    editedFarmEquiment.equipmentValue = equipmentValue;
    editedFarmEquiment.identificationNumber = identificationNumber;

    await editedFarmEquiment.save();

    return editedFarmEquiment;
  }

}