import { IsString, IsBoolean, IsOptional } from "class-validator";

export class CreateZoneDto {
    @IsBoolean()
    status: boolean;

    @IsString()
    @IsOptional()
    name: string;

    @IsString()
    @IsOptional()
    code: string;

    @IsString()
    @IsOptional()
    external_id: string;

    @IsString()
    @IsOptional()
    features: string;

    @IsString()
    @IsOptional()
    field_id: string;

    @IsString()
    @IsOptional()
    soiltype: string;

    @IsString()
    @IsOptional()
    company_id: string;

    @IsString()
    @IsOptional()
    location: string;
}
