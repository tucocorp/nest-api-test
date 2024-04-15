import { Module } from '@nestjs/common';
import { ClimatesService } from './climates.service';
import { ClimatesController } from './climates.controller';
import { Climate } from './entities/climate.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProvidersModule } from 'src/providers/providers.module';
import { ZonesModule } from 'src/zones/zones.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Climate]),
    ProvidersModule,
    ZonesModule
  ],
  controllers: [ClimatesController],
  providers: [ClimatesService]
})
export class ClimatesModule {}
