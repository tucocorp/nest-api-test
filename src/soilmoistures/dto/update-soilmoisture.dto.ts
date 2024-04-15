import { PartialType } from '@nestjs/mapped-types';
import { CreateSoilmoistureDto } from './create-soilmoisture.dto';

export class UpdateSoilmoistureDto extends PartialType(CreateSoilmoistureDto) {}
