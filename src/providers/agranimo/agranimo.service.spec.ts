import { Test, TestingModule } from '@nestjs/testing';
import { AgranimoService } from './agranimo.service';

describe('AgranimoService', () => {
  let service: AgranimoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AgranimoService],
    }).compile();

    service = module.get<AgranimoService>(AgranimoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
