import {
    Controller,
    Post,
    Body,
    Get,
    Patch,
    Param,
    Delete,
  } from '@nestjs/common';
  import { ProjectInputsService } from './project-inputs.service';
  import { CreateProjectInputsDto} from './dto/create-projectinputs.dto';
  import { Projectinputs} from './project.inputs.entity';
  
  @Controller('project-inputs')
  export class ProjectinputController {
    constructor(private projectinputService: ProjectInputsService) {}
  
    @Post('create')
    public async createProjectinput(
      @Body() CreateProjectInputsDto: CreateProjectInputsDto,
    ): Promise<Projectinputs> {
      const projectinput = await this.projectinputService.createProjectInput(CreateProjectInputsDto);
      return projectinput;
    }
  
    @Get('all')
    public async getProjectinputs(): Promise<Projectinputs[]> {
      const projectinputs = await this.projectinputService.getProjects();
      return projectinputs;
    }
  
    @Get('/:projectinputId')
    public async getProjectinput(@Param('projectinputId') projectinputId: number) {
      const projectinput = await this.projectinputService.getProjectInput(projectinputId);
      return projectinput;
    }
  
    @Patch('/edit/:projectinputId')
    public async editProjectInput(
      @Body() CreateProjectInputsDto: CreateProjectInputsDto,
      @Param('projectinputId') projectinputId: number,
    ): Promise<Projectinputs> {
      const projectinput = await this.projectinputService.editProjectinput(
        projectinputId,
        CreateProjectInputsDto,
      );
      return projectinput;
    }
  
    @Delete('/delete/:projectinputId')
    public async deleteProjectInput(@Param('projectinputId') projectinptId: number) {
      const deletedProjectInput = await this.projectinputService.deleteProjectinput(projectinptId);
      return deletedProjectInput;
    }
  }
  