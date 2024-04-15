import { Module } from '@nestjs/common';
import { ZonesModule } from './zones/zones.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProvidersModule } from './providers/providers.module';
import { ClimatesModule } from './climates/climates.module';
import { SoilmoisturesModule } from './soilmoistures/soilmoistures.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ZonesModule,
    ProvidersModule,
    ClimatesModule,
    SoilmoisturesModule,
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: "postgres",
      host: process.env.DB_HOST,
      port: 5436,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      autoLoadEntities: true,
      synchronize: true,
    })
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}