import { Injectable } from '@nestjs/common';
import { HttpCustomService } from 'src/providers/http/http.custom.service';

@Injectable()
export class AgranimoService {
    constructor(private readonly httpCustomService: HttpCustomService){ }

    private readonly baseUrl = process.env.AGRANIMO_URL_BASE
    private readonly credentials = {
        "username": process.env.AGRANIMO_USERNAME,
        "password": process.env.AGRANIMO_PASSWORD
    };

    public login(){
        const response = this.httpCustomService.post(this.baseUrl + "/auth/login", this.credentials)
        return response;
    }

    public async getZones(){
        const login = await this.login()
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
