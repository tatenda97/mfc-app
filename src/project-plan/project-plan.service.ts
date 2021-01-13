import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProjectPlanRepository } from './project.plan.repository';
import { CreateProjectPlanDTO } from './dto/create.project.plan.dto';
import { ProjectPlan } from './project.plan.entity';

@Injectable()
export class ProjectPlanService {
  constructor(
    @InjectRepository(ProjectPlanRepository)
    private planRepository: ProjectPlanRepository,
  ) {}

  public async createPlan(
    createPlanDto: CreateProjectPlanDTO,
  ): Promise<ProjectPlan> {
    return await this.planRepository.createProjectPlan(createPlanDto);
  }

  public async getPlans(): Promise<ProjectPlan[]> {
    return await this.planRepository.find();
  }

  public async getProjectPlan(planId: number): Promise<ProjectPlan> {
    const foundPlan = await this.planRepository.findOne(planId);
    if (!foundPlan) {
      throw new NotFoundException('Plan not found');
    }
    return foundPlan;
  }

  public async editProjectPlan(
    projectPlanId: number,
    createPlanDto: CreateProjectPlanDTO,
  ): Promise<ProjectPlan> {
    const editedPlan = await this.planRepository.findOne(projectPlanId);
    if (!editedPlan) {
      throw new NotFoundException('Plan not found');
    }
    return this.planRepository.editProjectPlan(createPlanDto, editedPlan);
  }

  public async deleteProjectPlan(planId: number): Promise<void> {
    await this.planRepository.delete(planId);
  }
}
