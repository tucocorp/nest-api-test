import { Controller, Get, Query } from '@nestjs/common';
import { SoilmoisturesService } from './soilmoistures.service';

@Controller('soilmoistures')
export class SoilmoisturesController {
  constructor(private readonly soilmoisturesService: SoilmoisturesService) {}

  @Get()
  getAll(@Query('zone_id') zoneId: number, @Query('date_start') dateStart: number, @Query('date_end') dateEnd: number) {
    return this.soilmoisturesService.findBy(zoneId, dateStart, dateEnd);
  }

  @Get('/loadData')
  loadData(@Query('zone_id') zoneId: number, @Query('date_start') dateStart: number, @Query('date_end') dateEnd: number) {

    return this.soilmoisturesService.createBatch(zoneId, dateStart, dateEnd);
  }
}
