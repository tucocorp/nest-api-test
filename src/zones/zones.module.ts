import { Module } from '@nestjs/common';
import { ZonesService } from './zones.service';
import { ZonesController } from './zones.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Zone } from './entities/zone.entity';
import { ProvidersModule } from 'src/providers/providers.module';


@Module({
  imports: [
    TypeOrmModule.forFeature([Zone]),
    ProvidersModule
  ],
  controllers: [ZonesController],
  providers: [ZonesService],
  exports: [ZonesService]
})
export class ZonesModule {}
