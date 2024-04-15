import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Zone } from './entities/zone.entity';
import { Repository } from 'typeorm';
import { AgranimoService } from 'src/providers/agranimo/agranimo.service';

@Injectable()
export class ZonesService {

  constructor(
    @InjectRepository(Zone)
    private readonly zoneRepository: Repository<Zone>,
    private readonly agranimoService: AgranimoService
  ) { }

  // Get zones from Agranimo API
  async createBatch() {
    const data = await this.agranimoService.getZones();

    const batch_zones = await data.map(e => {
      const zone = this.zoneRepository.create(e);
      zone['external_id'] = zone['id']
      zone['id'] = null

      return zone;
    });

    await this.zoneRepository.save(batch_zones);

    return batch_zones;
  }

  async findAll() {
    return await this.zoneRepository.find();
  }

  async findOne(id: number) {
    return await this.zoneRepository.findOneBy({ id });
  }
}
