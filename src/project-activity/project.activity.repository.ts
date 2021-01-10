import { Repository, EntityRepository } from 'typeorm';
import { ProjectActivity } from './project.activity.entity';
import { CreateProjectActivityDto } from './dto/create.project.activity.dto';

@EntityRepository(ProjectActivity)
export class ProjectActivityRepository extends Repository<ProjectActivity> {

  public async createProjectActivity(createProjectActivityDto: CreateProjectActivityDto): Promise<ProjectActivity> {
    const {
      activityName,
      activityDescription,
      activityStatus,
      projectManagerId,
      requirementId,
      startDate,
      endDate,
      duration
    } = createProjectActivityDto;

    const projectActivity = new ProjectActivity();
    projectActivity.projectManagerId = projectManagerId;
    projectActivity.activityName = activityName;
    projectActivity.activityDescription = activityDescription;
    projectActivity.activityStatus = activityStatus;
    projectActivity.requirementId = requirementId;
    projectActivity.startDate = startDate;
    projectActivity.endDate = endDate;
    projectActivity.duration = duration;

    await projectActivity.save();
    return projectActivity;

  }

  public async editProjectActivity(
    createProjectActivityDto: CreateProjectActivityDto,
    editedProjectActivity: ProjectActivity,
  ): Promise<ProjectActivity> {
    const {
        activityName,
        activityDescription,
        activityStatus,
        projectManagerId,
        requirementId,
        startDate,
        endDate,
        duration
    } = createProjectActivityDto;

    editedProjectActivity.projectManagerId = projectManagerId;
    editedProjectActivity.activityName = activityName;
    editedProjectActivity.activityDescription = activityDescription;
    editedProjectActivity.activityStatus = activityStatus;
    editedProjectActivity.requirementId = requirementId;
    editedProjectActivity.startDate = startDate;
    editedProjectActivity.endDate = endDate;
    editedProjectActivity.duration = duration;

    await editedProjectActivity.save();
    return editedProjectActivity;
  }
}