import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';
import { ProjectPlanService } from './project-plan.service';
import { CreateProjectPlanDTO } from './dto/create.project.plan.dto';
import { ProjectPlan } from './project.plan.entity';

@Controller('project-plan')
export class ProjectPlanController {
  constructor(private planService: ProjectPlanService) {}

  @Post('create')
  public async createProjectPlan(
    @Body() createProjectPlanDto: CreateProjectPlanDTO,
  ): Promise<ProjectPlan> {
    const projectPlan = await this.planService.createPlan(createProjectPlanDto);
    return projectPlan;
  }

  @Get('all')
  public async getProjectPlans(): Promise<ProjectPlan[]> {
    const projectPlan = await this.planService.getPlans();
    return projectPlan;
  }

  @Get('/:planId')
  public async getProjectPlan(@Param('planId') planId: number) {
    const plan = await this.planService.getProjectPlan(planId);
    return plan;
  }

  @Patch('/edit/:planId')
  public async editProjectPlan(
    @Body() createProjectPlanDto: CreateProjectPlanDTO,
    @Param('planId') planId: number,
  ): Promise<ProjectPlan> {
    const projectPlan = await this.planService.editProjectPlan(
      planId,
      createProjectPlanDto,
    );
    return projectPlan;
  }

  @Delete('/delete/:planId')
  public async deleteProjectPlan(@Param('planId') planId: number) {
    const deletedPlan = await this.planService.deleteProjectPlan(planId);
    return deletedPlan;
  }
}
