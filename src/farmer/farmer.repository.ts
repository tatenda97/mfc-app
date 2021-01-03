import { Repository, EntityRepository } from 'typeorm';
import { Farmer } from './farmer.entity';
import { CreateFarmerDTO } from './dto/create-farmer.dto';

@EntityRepository(Farmer)
export class FarmerRepository extends Repository<Farmer> {
  public async createFarmer(createFarmerDto: CreateFarmerDTO): Promise<Farmer> {
    const {
      name,
      surname,
      nationalID,
      gender,
      dateOfBirth,
      description,
    } = createFarmerDto;

    const farmer = new Farmer();
    farmer.name = name;
    farmer.surname = surname;
    farmer.description = description;
    farmer.nationalID = nationalID;
    farmer.dateOfBirth = dateOfBirth;
    farmer.gender = gender;
    farmer.description = description;

    await farmer.save();
    return farmer;
  }

  public async editFarmer(
    createFarmerDto: CreateFarmerDTO,
    editedFarmer: Farmer,
  ): Promise<Farmer> {
    const {
      name,
      surname,
      nationalID,
      gender,
      dateOfBirth,
      description,
    } = createFarmerDto;

    editedFarmer.name = name;
    editedFarmer.surname = surname;
    editedFarmer.description = description;
    editedFarmer.nationalID = nationalID;
    editedFarmer.dateOfBirth = dateOfBirth;
    editedFarmer.gender = gender;
    editedFarmer.description = description;

    await editedFarmer.save();

    return editedFarmer;
  }
}
