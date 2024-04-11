import { Module } from '@nestjs/common';
import { ZonesModule } from './zones/zones.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProvidersModule } from './providers/providers.module';

@Module({
  imports: [
    ZonesModule,
    ProvidersModule,
    TypeOrmModule.forRoot({
      type: "postgres",
      host: "localhost",
      port: 5436,
      username: "postgres",
      password: "postgres",
      database: "db_crud",
      autoLoadEntities: true,
      synchronize: true,
    })
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}