import { Module } from '@nestjs/common';
import { ProjectActivityService } from './project-activity.service';
import { ProjectActivityController } from './project-activity.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProjectActivityRepository } from './project.activity.repository';

@Module({
  imports: [TypeOrmModule.forFeature([ProjectActivityRepository])],
  providers: [ProjectActivityService],
  controllers: [ProjectActivityController]
})
export class ProjectActivityModule {}
