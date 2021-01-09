import { Test, TestingModule } from '@nestjs/testing';
import { FarmAssetService } from './farm-asset.service';

describe('FarmAssetService', () => {
  let service: FarmAssetService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FarmAssetService],
    }).compile();

    service = module.get<FarmAssetService>(FarmAssetService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
