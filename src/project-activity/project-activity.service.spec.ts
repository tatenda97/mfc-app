import { Test, TestingModule } from '@nestjs/testing';
import { ProjectActivityService } from './project-activity.service';

describe('ProjectActivityService', () => {
  let service: ProjectActivityService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProjectActivityService],
    }).compile();

    service = module.get<ProjectActivityService>(ProjectActivityService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
