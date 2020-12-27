import { Test, TestingModule } from '@nestjs/testing';
import { FarmerService } from './farmer.service';
import { FarmerRepository } from './farmer.repository';
import { NotFoundException } from '@nestjs/common';

describe('FarmerService', () => {
  let farmerService: FarmerService;
  let farmerRepository;
  const mockFarmerRepository = () => ({
    createFarmer: jest.fn(),
    find: jest.fn(),
    findOne: jest.fn(),
    delete: jest.fn(),
  });


  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        FarmerService,
        {
          provide: FarmerRepository,
          useFactory: mockFarmerRepository,
        }
      
      ],
    }).compile();

    farmerService = module.get<FarmerService>(FarmerService);
    farmerRepository = await module.get<FarmerRepository>(FarmerRepository);
  });

  describe('createFarmer', () => {
    it('should save a farmer in the database', async () => {
      farmerRepository.createFarmer.mockResolvedValue('someFarmer');
      expect(farmerRepository.createFarmer).not.toHaveBeenCalled();
      const createFarmerDto = {
        name: 'sample name',
        surname: 'sample surname',
        nationalID: '47-180224-B47',
        gender: 'Male',
        dateOfBirth:new Date(),
        description: 'sample description',

      };
      const result = await farmerService.createFarmer(createFarmerDto);
      expect(farmerRepository.createFarmer).toHaveBeenCalledWith(
        createFarmerDto,
      );
      expect(result).toEqual('someFarmer');
    });
  });

  describe('getFarmers', () => {
    it('should get all farmers', async () => {
      farmerRepository.find.mockResolvedValue('Bossman');
      expect(farmerRepository.find).not.toHaveBeenCalled();
      const result = await farmerService.getFarmers();
      expect(farmerRepository.find).toHaveBeenCalled();
      expect(result).toEqual('Bossman');
    });
  });


describe('getFarmer', () => {
  it('should retrieve a farmer with an ID', async () => {
    const mockFarmer = {
      name: 'Bossman',
      surname: 'Elchapo',
      nationalID: 'bossman@gmail.com',
      dateOfBirth:'2012-04-23T18:25:44.000Z',
      gender: 'Male',
      description: 'This is a test account on the application',
    };
    farmerRepository.findOne.mockResolvedValue(mockFarmer);
    const result = await farmerService.getFarmer(1);
    expect(result).toEqual(mockFarmer);
    expect(farmerRepository.findOne).toHaveBeenCalledWith(1);
  });

  it('throws an error as a farmer is not found', () => {
    farmerRepository.findOne.mockResolvedValue(null);
    expect(farmerService.getFarmer(1)).rejects.toThrow(NotFoundException);
  });
});

describe('deleteFarmer', () => {
  it('should delete farmer', async () => {
    farmerRepository.delete.mockResolvedValue(1);
    expect(farmerRepository.delete).not.toHaveBeenCalled();
    await farmerService.deleteFarmer(1);
    expect(farmerRepository.delete).toHaveBeenCalledWith(1);
  });
});
});