import { Test, TestingModule } from '@nestjs/testing';
import { SoilmoisturesController } from './soilmoistures.controller';
import { SoilmoisturesService } from './soilmoistures.service';

describe('SoilmoisturesController', () => {
  let controller: SoilmoisturesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SoilmoisturesController],
      providers: [SoilmoisturesService],
    }).compile();

    controller = module.get<SoilmoisturesController>(SoilmoisturesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
