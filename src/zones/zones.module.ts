import { Module } from '@nestjs/common';
import { ZonesService } from './zones.service';
import { ZonesController } from './zones.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Zone } from './entities/zone.entity';
import { ProvidersModule } from 'src/providers/providers.module';
// import { HttpCustomService } from 'src/providers/http/http.service';

@Module({
  // imports: [TypeOrmModule.forFeature([Zone]), ProvidersModule],
  imports: [TypeOrmModule.forFeature([Zone])],
  controllers: [ZonesController],
  providers: [ZonesService],
  // providers: [ZonesService]
})
export class ZonesModule {}
