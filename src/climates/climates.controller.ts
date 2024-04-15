import { Controller, Get, Query } from '@nestjs/common';
import { ClimatesService } from './climates.service';

@Controller('climates')
export class ClimatesController {
  constructor(private readonly climatesService: ClimatesService) {}

  @Get()
  getAll(@Query('zone_id') zoneId: number, @Query('date_start') dateStart: number, @Query('date_end') dateEnd: number) {
    return this.climatesService.findBy(zoneId, dateStart, dateEnd);
  }

  @Get('/loadData')
  loadData(@Query('zone_id') zoneId: number, @Query('date_start') dateStart: number, @Query('date_end') dateEnd: number) {
    return this.climatesService.createBatch(zoneId, dateStart, dateEnd);
  }
}
