import { IsString, IsOptional, IsNumber, IsDateString, IsDecimal } from "class-validator";

export class CreateSoilmoistureDto {
    @IsString()
    deviceId: string;

    @IsDecimal()
    @IsOptional()
    TMS: number;

    @IsNumber()
    @IsOptional()
    smo1: number;

    @IsNumber()
    @IsOptional()
    sec1: number;

    @IsNumber()
    @IsOptional()
    sea1: number;

    @IsDateString()
    @IsOptional()
    createdAt: Date;

    @IsNumber()
    zoneId: number;
}
