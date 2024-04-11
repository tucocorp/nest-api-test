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
}
