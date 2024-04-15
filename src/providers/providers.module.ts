import { Global, Module } from '@nestjs/common';
import { HttpModule, HttpService } from '@nestjs/axios';
import { HttpCustomService } from './http/http.custom.service';
import { AgranimoService } from './agranimo/agranimo.service';
import { AgranimoController } from './agranimo/agranimo.controller';

@Global()
@Module({
  imports: [HttpModule],
  providers: [HttpCustomService, AgranimoService],
  controllers: [AgranimoController],
  exports: [AgranimoService]
})
export class ProvidersModule {}
