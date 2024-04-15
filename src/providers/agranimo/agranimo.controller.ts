import { Controller, Get, Post, Param, Query } from '@nestjs/common';
import { AgranimoService } from './agranimo.service';

@Controller('agranimo')
export class AgranimoController {
  constructor(private readonly agranimoService: AgranimoService) {}

  @Get('/getZones')
  getZones(){
    return this.agranimoService.getZones()
  }

  @Get('/getZones/:id/getClimate')
  getClimate(@Param('id') id: string, @Query('date_start') dateStart: number, @Query('date_end') dateEnd: number){
    return this.agranimoService.getClimate(id , dateStart, dateEnd)
  }

  @Get('/getZones/:id/getSoilMoisture')
  getSoilMoisture(@Param('id') id: string, @Query('date_start') dateStart: number, @Query('date_end') dateEnd: number){
    return this.agranimoService.getSoilMoisture(id , dateStart, dateEnd)
  }
}
