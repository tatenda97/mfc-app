import { Repository, EntityRepository } from 'typeorm';
import { Farm } from './farm.entity';
import { CreateFarmDTO } from './dto/create-farm.dto';

@EntityRepository(Farm)
export class FarmRepository extends Repository<Farm> {

  public async createFarm(
    createFarmerDto: CreateFarmDTO,
  ): Promise<Farm> {
    const { name,description,plotNumber,ownerId} = createFarmerDto;

    const farm = new Farm();
    farm.name = name;
    farm.description = description;
    farm.plotNumber = plotNumber;
    farm.ownerId = ownerId;
    
    await farm.save();
    return farm;
  }

  public async editFarm(
    createFarmDto: CreateFarmDTO,
    editedFarm: Farm,
  ): Promise<Farm> {
    const { name,description,plotNumber,ownerId} = createFarmDto;

    editedFarm.name = name;
    editedFarm.description = description;
    editedFarm.plotNumber = plotNumber;
    editedFarm.ownerId = ownerId;

    await editedFarm.save();

    return editedFarm;
  }
}