import { Repository, EntityRepository } from 'typeorm';
import { ProjectPlan } from './project.plan.entity';
import { CreateProjectPlanDTO } from './dto/create.project.plan.dto';

@EntityRepository(ProjectPlan)
export class ProjectPlanRepository extends Repository<ProjectPlan> {
  public async createProjectPlan(
    createProjectPlanDto: CreateProjectPlanDTO,
  ): Promise<ProjectPlan> {
    const {
      projectId,
      planName,
      planDescription,
      duration,
      createDate,
      estimatedEndDate,
      startDate,
      budget,
    } = createProjectPlanDto;

    const projectPlan = new ProjectPlan();
    projectPlan.planName = planName;
    projectPlan.projectId = projectId;
    projectPlan.planDescription = planDescription;
    projectPlan.duration = duration;
    projectPlan.startDate = startDate;
    projectPlan.createDate = createDate;
    projectPlan.estimatedEndDate = estimatedEndDate;
    projectPlan.budget = budget;

    await projectPlan.save();
    return projectPlan;
  }

  public async editProjectPlan(
    createProjectPlanDto: CreateProjectPlanDTO,
    editedProjectPlan: ProjectPlan,
  ): Promise<ProjectPlan> {
    const {
      projectId,
      planName,
      planDescription,
      duration,
      createDate,
      estimatedEndDate,
      startDate,
      budget,
    } = createProjectPlanDto;

    editedProjectPlan.planName = planName;
    editedProjectPlan.projectId = projectId;
    editedProjectPlan.planDescription = planDescription;
    editedProjectPlan.duration = duration;
    editedProjectPlan.startDate = startDate;
    editedProjectPlan.createDate = createDate;
    editedProjectPlan.estimatedEndDate = estimatedEndDate;
    editedProjectPlan.budget = budget;

    await editedProjectPlan.save();

    return editedProjectPlan;
  }
}
