
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProjectActivityRepository } from './project.activity.repository';
import { CreateProjectActivityDto } from './dto/create.project.activity.dto';
import { ProjectActivity } from './project.activity.entity';

@Injectable()
export class ProjectActivityService {
  constructor(
    @InjectRepository(ProjectActivityRepository)
    private projectActivityRepository: ProjectActivityRepository,
  ) {}

  public async createProjectActivity(
    createProjectActivityDto: CreateProjectActivityDto,
  ): Promise<ProjectActivity> {
 
    return await this.projectActivityRepository.createProjectActivity(createProjectActivityDto);
  }
  public async getProjectActivities(): Promise<ProjectActivity[]> {
    return await this.projectActivityRepository.find();
  }

  public async getProjectActivity(projectActivityId: number): Promise<ProjectActivity> {
    const foundProjectActivity = await this.projectActivityRepository.findOne( projectActivityId);
    if (!foundProjectActivity) {
      throw new NotFoundException('Project not found');
    }
    return foundProjectActivity;
  }

  public async editProjectActivity(
    projectActivityId: number,
    createProjectActivityDto: CreateProjectActivityDto,
  ): Promise<ProjectActivity> {
    const editedProjectActivity = await this.projectActivityRepository.findOne(
        projectActivityId,
    );
    if (!editedProjectActivity) {
      throw new NotFoundException('Project Activity not found');
    }
    return this.projectActivityRepository.editProjectActivity(
      createProjectActivityDto,
      editedProjectActivity,
    );
  }

  public async deleteProjectActivity(projectActivityId: number): Promise<void> {
    await this.projectActivityRepository.delete(projectActivityId);
  }
}
