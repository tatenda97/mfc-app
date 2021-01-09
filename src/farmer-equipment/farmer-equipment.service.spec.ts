import { Test, TestingModule } from '@nestjs/testing';
import { FarmerEquipmentService } from './farmer-equipment.service';

describe('FarmerEquipmentService', () => {
  let service: FarmerEquipmentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FarmerEquipmentService],
    }).compile();

    service = module.get<FarmerEquipmentService>(FarmerEquipmentService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
