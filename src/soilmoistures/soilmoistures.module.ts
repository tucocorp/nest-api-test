import { Module } from '@nestjs/common';
import { SoilmoisturesService } from './soilmoistures.service';
import { SoilmoisturesController } from './soilmoistures.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Soilmoisture } from './entities/soilmoisture.entity';
import { ZonesModule } from 'src/zones/zones.module';
import { ProvidersModule } from 'src/providers/providers.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Soilmoisture]),
    ProvidersModule,
    ZonesModule
  ],
  controllers: [SoilmoisturesController],
  providers: [SoilmoisturesService]
})
export class SoilmoisturesModule {}