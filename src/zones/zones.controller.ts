import { Controller, Get, Param, Query } from '@nestjs/common';
import { ZonesService } from './zones.service';

@Controller('zones')
export class ZonesController {
  constructor(
    private readonly zonesService: ZonesService
  ) {}


  @Get()
  findAll() {
    return this.zonesService.findAll();
  }

  @Get('/loadData')
  loadData() {
    return this.zonesService.createBatch();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.zonesService.findOne(id);
  }
}
