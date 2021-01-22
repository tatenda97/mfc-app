import { Module } from '@nestjs/common';
import { ProjectInputsService } from './project-inputs.service';
import { ProjectinputController } from './project-inputs.controller';
import { ProjectInputsRepository } from './project.inputs.repository';
import { TypeOrmModule } from '@nestjs/typeorm';


@Module({
  imports: [TypeOrmModule.forFeature([ProjectInputsRepository])],
  providers: [ProjectInputsService],
  controllers: [ProjectinputController]
})
export class ProjectInputsModule {}
