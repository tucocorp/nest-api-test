import { IsString, IsOptional, IsNumber, IsDateString } from "class-validator";

export class CreateClimateDto {
    @IsString()
    deviceId: string;

    @IsNumber()
    @IsOptional()
    TMS: number;

    @IsNumber()
    @IsOptional()
    stm1: number;

    @IsNumber()
    @IsOptional()
    tem1: number;

    @IsNumber()
    @IsOptional()
    hum1: number;

    @IsNumber()
    @IsOptional()
    solr: number;

    @IsNumber()
    @IsOptional()
    prec: number;

    @IsNumber()
    @IsOptional()
    wind: number;

    @IsNumber()
    @IsOptional()
    wins: number;

    @IsNumber()
    @IsOptional()
    tw: number;

    @IsNumber()
    @IsOptional()
    dwp: number;

    @IsNumber()
    zoneId: number;

    @IsDateString()
    @IsOptional()
    createdAt: Date;
}
