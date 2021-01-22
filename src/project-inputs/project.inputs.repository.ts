import { Repository, EntityRepository } from 'typeorm';
import { Projectinputs } from './project.inputs.entity';
import { CreateProjectInputsDto } from './dto/create-projectinputs.dto';

@EntityRepository(Projectinputs)
export class ProjectInputsRepository extends Repository<Projectinputs> {
  public async createProjectInputs(
    createProjectInputsDto: CreateProjectInputsDto,
  ): Promise<Projectinputs> {
    const {
      name,
      description,
      TotalCost,
      applicationdate,
      quantity,
    } = createProjectInputsDto;

    const projectinputs = new Projectinputs();
    projectinputs.name = name;
    projectinputs.description = description;
    projectinputs.TotalCost = TotalCost;
    projectinputs.applicationdate = applicationdate;
    projectinputs.quantity = quantity;
    

    await projectinputs.save();
    return projectinputs;
  }

  public async editProjectInput(
    createProjectInputsDto: CreateProjectInputsDto,
    editedProjectInput: Projectinputs,
  ): Promise<Projectinputs> {
    const {
      name,
      description,
      TotalCost,
      applicationdate,
      quantity,
    } = createProjectInputsDto;

    editedProjectInput.name = name;
    editedProjectInput.description = description;
    editedProjectInput.TotalCost = TotalCost;
    editedProjectInput.applicationdate = applicationdate;
    editedProjectInput.quantity = quantity;

    await editedProjectInput.save();

    return editedProjectInput;
  }
}
