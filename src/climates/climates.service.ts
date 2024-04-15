import { Injectable } from '@nestjs/common';
import { Climate } from './entities/climate.entity';
import { CreateClimateDto } from './dto/create-climate.dto';
import { UpdateClimateDto } from './dto/update-climate.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Between, Like, Repository } from 'typeorm';
import { AgranimoService } from 'src/providers/agranimo/agranimo.service';
import { ZonesService } from 'src/zones/zones.service';

@Injectable()
export class ClimatesService {

  constructor(
    @InjectRepository(Climate)
    private readonly climateRepository: Repository<Climate>,
    private readonly agranimoService: AgranimoService,
    private readonly zoneService: ZonesService,

  ) { }

  // Get climates from Agranimo API
  async createBatch(zoneId: number, dateStart: number, dateEnd: number) {
    console.log(zoneId)
    const zone = await this.zoneService.findOne(zoneId)
    const data = await this.agranimoService.getClimate(zone['external_id'], dateStart, dateEnd)

    const batch_climates = await data.map(element => {
      const climate = this.climateRepository.create(element);
      climate['zone'] = zone['id']

      return climate;
    });

    await this.climateRepository.save(batch_climates);

    return "OK";
  }

  // Find climates by zoneId, dateStart & dateEnd
  async findBy(zoneId: number, dateStart: number, dateEnd: number) {
    const climates = await this.climateRepository.find({
      where: { zone: zoneId },
      order: {
        TMS: "ASC"
      }
    });

    return climates;
  }
}
