import { Module } from '@nestjs/common';
import { ProjectPlanService } from './project-plan.service';
import { ProjectPlanController } from './project-plan.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProjectPlanRepository } from './project.plan.repository';

@Module({
  imports: [TypeOrmModule.forFeature([ProjectPlanRepository])],
  providers: [ProjectPlanService],
  controllers: [ProjectPlanController],
})
export class ProjectPlanModule {}
