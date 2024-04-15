import { Test, TestingModule } from '@nestjs/testing';
import { SoilmoisturesService } from './soilmoistures.service';

describe('SoilmoisturesService', () => {
  let service: SoilmoisturesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SoilmoisturesService],
    }).compile();

    service = module.get<SoilmoisturesService>(SoilmoisturesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
