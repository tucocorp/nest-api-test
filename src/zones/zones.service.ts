import { Injectable } from '@nestjs/common';
import { CreateZoneDto } from './dto/create-zone.dto';
import { UpdateZoneDto } from './dto/update-zone.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Zone } from './entities/zone.entity';
import { Repository } from 'typeorm';
// import { HttpCustomService } from 'src/providers/http/http.service';
import { AgranimoService } from 'src/providers/agranimo/agranimo.service';

@Injectable()
export class ZonesService {

  constructor(
    @InjectRepository(Zone)
    private readonly zoneRepository: Repository<Zone>,
    // private readonly agranimoService: AgranimoService
  ) { }

  async create(createZoneDto: CreateZoneDto) {
    try{
      const zone = this.zoneRepository.create(createZoneDto);
      await this.zoneRepository.save(zone);
      return zone;
    }catch(error){
      console.log(error);
    }
  }

  async findAll() {
    return await this.zoneRepository.find();
  }

  async findOne(id: number) {
    console.log(id)
    return await this.zoneRepository.findOneBy({ id });
  }

  async update(id: number, updateZoneDto: UpdateZoneDto) {
    return await this.zoneRepository.update(id, updateZoneDto);
  }

  async remove(id: number) {
    return await this.zoneRepository.softDelete(id);
  }




  // async login(){
  //   return await this.agranimoService.login()
  // }

  // async getZones(){
  //   return await this.agranimoService.getZones()
  // }
}
