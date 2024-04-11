import { Injectable } from '@nestjs/common';
import { HttpCustomService } from 'src/providers/http/http.service';


import { ZonesService } from 'src/zones/zones.service';
// import { CreateZoneDto } from 'src/zones/dto/create-zone.dto';
// import { Zone } from 'src/zones/entities/zone.entity';
// import { Repository } from 'typeorm';

@Injectable()
export class AgranimoService {
    constructor(
        private readonly httpCustomService: HttpCustomService,
        // private zoneService: ZonesService,
        // private readonly zoneRepository: Repository<Zone>,
    ){ }

    private readonly baseUrl = "https://public-staging.agranimo.com"
    private readonly credentials = {
      "username": "software@arbolitics.com",
      "password": "123arbolitics123"
    }

    public login(){
        const response = this.httpCustomService.post(this.baseUrl + "/auth/login", this.credentials)
        return response;
    }

    public async getZones(){
        const login = await this.login()
        // const zones = await this.httpCustomService.get(this.baseUrl + "/zone/", {}, login.accessToken)

        // zones.forEach(function(zone){
        //     console.log(zone.id);
        //     this.zoneService.create(zone)
        //   });
        // return zones
        return this.httpCustomService.get(this.baseUrl + "/zone/", {}, login.accessToken)
    }

    public async getClimate(zone_id: string, dateStart: number, dateEnd: number){
        const login = await this.login()
        return this.httpCustomService.get(this.baseUrl + "/zone/" + zone_id + "/data/climate?dateStart=" + dateStart + "&dateEnd=" + dateEnd, {}, login.accessToken)

    }

    public async getSoilMoisture(zone_id: string, dateStart: number, dateEnd: number){
        const login = await this.login()
        return this.httpCustomService.get(this.baseUrl + "/zone/" + zone_id + "/data/soilmoisture?dateStart=" + dateStart + "&dateEnd=" + dateEnd + "&type=WaterContent" , {}, login.accessToken)

    }
}
