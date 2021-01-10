import { Controller, Post, Body, Get, Param, Patch, Delete } from '@nestjs/common';
import { ProjectActivityService } from './project-activity.service';
import { CreateProjectActivityDto } from './dto/create.project.activity.dto';
import { ProjectActivity } from './project.activity.entity';

@Controller('project-activity')
export class ProjectActivityController {
    constructor(private projectActivityService: ProjectActivityService) {}

    @Post('create')
    public async createProjectActivity(
      @Body() createProjectActivityDto: CreateProjectActivityDto,
    ): Promise<ProjectActivity> {
      const activity = await this.projectActivityService.createProjectActivity(createProjectActivityDto);
      return activity;
    }
  
    @Get('all')
    public async getActivities(): Promise<ProjectActivity[]> {
      const activities = await this.projectActivityService.getProjectActivities();
      return activities;
    }
  
    @Get('/:activityId')
    public async getActivity(@Param('activityId') activityId: number) {
      const activity = await this.projectActivityService.getProjectActivity(activityId);
      return activity;
    }
  
    @Patch('/edit/:activityId')
    public async editActity(
      @Body() createProjectActivity: CreateProjectActivityDto,
      @Param('activityId') activityId: number,
    ): Promise<ProjectActivity> {
      const activity = await this.projectActivityService.editProjectActivity(
        activityId,
        createProjectActivity,
      );
      return activity;
    }
  
    @Delete('/delete/:activityId')
    public async deleteActivity(@Param('activityId') activityId: number) {
      const deleteActivity = await this.projectActivityService.deleteProjectActivity(activityId);
      return deleteActivity;
    }
}
