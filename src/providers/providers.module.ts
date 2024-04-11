import { Global, Module } from '@nestjs/common';
import { HttpCustomService } from './http/http.service';
import { HttpModule } from '@nestjs/axios';
import { AgranimoService } from './agranimo/agranimo.service';
import { AgranimoController } from './agranimo/agranimo.controller';
import { ZonesModule } from 'src/zones/zones.module';
import { ZonesService } from 'src/zones/zones.service';

@Global()
@Module({
  imports: [HttpModule, ZonesModule],
  controllers: [AgranimoController],
  providers: [HttpCustomService, AgranimoService]
  // providers: [HttpCustomService, AgranimoService, ZonesService]
})
export class ProvidersModule {}
