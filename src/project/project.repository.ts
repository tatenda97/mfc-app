import { Repository, EntityRepository } from 'typeorm';
import { Project } from './project.entity';
import { CreateProjectDTO } from './dto/project.dto';

@EntityRepository(Project)
export class ProjectRepository extends Repository<Project> {
  public async createProject(createProjectDto: CreateProjectDTO): Promise<Project> {
    const {
      projectName,
      ownerId,
      projectDescription,
      projectManagerId,
      projectType,
      projectContractorId,
      startDate,
      endDate,
      duration
    } = createProjectDto;

    const project = new Project();
    project.projectContractorId = projectContractorId;
    project.projectName = projectName;
    project.projectDescription = projectDescription;
    project.projectManagerId = projectManagerId;
    project.projectType = projectType;
    project.ownerId = ownerId;
    project.startDate = startDate;
    project.endDate = endDate;
    project.duration = duration;

    await project.save();
    return project;

  }

  public async editProject(
    createProjectDto: CreateProjectDTO,
    editedProject: Project,
  ): Promise<Project> {
    const {
        projectName,
        ownerId,
        projectDescription,
        projectManagerId,
        projectType,
        projectContractorId,
        startDate,
        endDate,
        duration
    } = createProjectDto;

    editedProject.projectContractorId = projectContractorId;
    editedProject.projectName = projectName;
    editedProject.projectDescription = projectDescription;
    editedProject.projectManagerId = projectManagerId;
    editedProject.projectType = projectType;
    editedProject.ownerId = ownerId;
    editedProject.startDate = startDate;
    editedProject.endDate = endDate;
    editedProject.duration = duration;

    await editedProject.save();

    return editedProject;
  }
}