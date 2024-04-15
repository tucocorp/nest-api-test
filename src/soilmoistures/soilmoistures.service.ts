import { Injectable } from '@nestjs/common';
import { Soilmoisture } from './entities/soilmoisture.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AgranimoService } from 'src/providers/agranimo/agranimo.service';
import { ZonesService } from 'src/zones/zones.service';

@Injectable()
export class SoilmoisturesService {

  constructor(
    @InjectRepository(Soilmoisture)
    private readonly soilmoisturesRepository: Repository<Soilmoisture>,
    private readonly agranimoService: AgranimoService,
    private readonly zoneService: ZonesService
  ) { }

  // Get soilmoistures from Agranimo API
  async createBatch(zoneId: number, dateStart: number, dateEnd: number) {
    const zone = await this.zoneService.findOne(zoneId)
    const data = await this.agranimoService.getSoilMoisture(zone['external_id'], dateStart, dateEnd)

    const batch_climates = await data.map(element => {
      const climate = this.soilmoisturesRepository.create(element);
      climate['zone'] = zone['id']

      return climate;
    });

    await this.soilmoisturesRepository.save(batch_climates);

    return { sucess: true };
  }

  // Find soilmoistures by zoneId, dateStart & dateEnd
  async findBy(zoneId: number, dateStart: number, dateEnd: number) {
    const soilmoistures = await this.soilmoisturesRepository.find({
      where: { zone: zoneId },
      order: {
        TMS: "ASC"
      }
    });

    return soilmoistures.sort();
  }
}