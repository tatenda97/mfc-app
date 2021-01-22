import { Test, TestingModule } from '@nestjs/testing';
import { ProjectInputsService } from './project-inputs.service';

describe('ProjectInputsService', () => {
  let service: ProjectInputsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProjectInputsService],
    }).compile();

    service = module.get<ProjectInputsService>(ProjectInputsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
