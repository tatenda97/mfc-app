
import {
    Controller,
    Post,
    Body,
    Get,
    Patch,
    Param,
    Delete,
  } from '@nestjs/common';
import { ProjectService } from './project.service';
import { CreateProjectDTO } from './dto/project.dto';
import { Project } from './project.entity';

  @Controller('project')
  export class ProjectController {
    constructor(private projectService: ProjectService) {}
  
    @Post('create')
    public async createProject(
      @Body() createProjectDto: CreateProjectDTO,
    ): Promise<Project> {
      const project = await this.projectService.createProject(createProjectDto);
      return project;
    }
  
    @Get('all')
    public async getProjects(): Promise<Project[]> {
      const projects = await this.projectService.getProjects();
      return projects;
    }
  
    @Get('/:projectId')
    public async getProject(@Param('projectId') projectId: number) {
      const project = await this.projectService.getProject(projectId);
      return project;
    }
  
    @Patch('/edit/:projectId')
    public async editProject(
      @Body() createProjectDto: CreateProjectDTO,
      @Param('projectId') projectId: number,
    ): Promise<Project> {
      const project = await this.projectService.editProject(
        projectId,
        createProjectDto,
      );
      return project;
    }
  
    @Delete('/delete/:projectId')
    public async deleteProject(@Param('projectId') projectId: number) {
      const deletedProject = await this.projectService.deleteProject(projectId);
      return deletedProject;
    }
  }
  
