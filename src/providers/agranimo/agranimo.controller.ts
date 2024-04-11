import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { AgranimoService } from './agranimo.service';
// import { ZonesService } from './zones.service';
// import { CreateZoneDto } from '../zones/dto/create-zone.dto';
// import { UpdateZoneDto } from './dto/update-zone.dto';

@Controller('agranimo')
export class AgranimoController {
  constructor(private readonly agranimoService: AgranimoService) {}

  @Post('login')
  login(){
    console.log("HOLA TUCOCORPS")
    return this.agranimoService.login()
  }

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

//   @Post()
//   create(@Body() createZoneDto: CreateZoneDto) {
//     console.log(CreateZoneDto);
//     return this.zonesService.create(createZoneDto);
//   }

//   @Get()
//   findAll() {
//     return this.zonesService.findAll();
//   }

//   @Get(':id')
//   findOne(@Param('id') id: number) {
//     return this.zonesService.findOne(id);
//   }

//   @Patch(':id')
//   update(@Param('id') id: number, @Body() updateZoneDto: UpdateZoneDto) {
//     return this.zonesService.update(id, updateZoneDto);
//   }

//   @Delete(':id')
//   remove(@Param('id') id: number) {
//     return this.zonesService.remove(id);
//   }
}
