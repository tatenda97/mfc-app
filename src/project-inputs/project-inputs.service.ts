import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProjectInputsRepository } from './project.inputs.repository';
import { CreateProjectInputsDto } from './dto/create-projectinputs.dto';
import { Projectinputs} from './project.inputs.entity';

@Injectable()
export class ProjectInputsService {
  constructor(
    @InjectRepository(ProjectInputsRepository)
    private projectRepository: ProjectInputsRepository,
  ) {}

  public async createProjectInput(
    createProjectInputsDto: CreateProjectInputsDto,
  ): Promise<Projectinputs> {
 
    return await this.projectRepository.createProjectInputs(createProjectInputsDto);
  }
  public async getProjects(): Promise<Projectinputs[]> {
    return await this.projectRepository.find();
  }

  public async getProjectInput(projectinputsid: number): Promise<Projectinputs> {
    const foundProjectid = await this.projectRepository.findOne( projectinputsid);
    if (!foundProjectid) {
      throw new NotFoundException('Project input not found');
    }
    return foundProjectid;
  }

  public async editProjectinput(
    projectinputsid: number,
    createProjectInputsDto: CreateProjectInputsDto,
  ): Promise<Projectinputs> {
    const editedProjectInput = await this.projectRepository.findOne(
      projectinputsid,
    );
    if (!editedProjectInput) {
      throw new NotFoundException('Project input not found');
    }
    return this.projectRepository.editProjectInput(
      createProjectInputsDto,
      editedProjectInput,
    );
  }

  public async deleteProjectinput(projectinputsid: number): Promise<void> {
    await this.projectRepository.delete(projectinputsid);
  }
}