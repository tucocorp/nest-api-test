import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class HttpCustomService {
    constructor(private readonly httpService: HttpService){}

    public async post(url: any, data: any){
        try {
            const response  = await firstValueFrom(
                this.httpService.post(url, data)
            )
            return response.data;
        } catch (error) {
            throw error;
        }
    }

    public async get(url: any, data: any, accessToken: any){
        try {
            const response  = await firstValueFrom(
                this.httpService.get(url, {
                    headers:<any> 'Authorization: bearer ' + accessToken
                })
            )
            return response.data;
        } catch (error) {
            throw error;
        }
    }
}
