import { Climate } from "src/climates/entities/climate.entity";
import { Soilmoisture } from "src/soilmoistures/entities/soilmoisture.entity";
import { Column, DeleteDateColumn, Entity, OneToMany } from "typeorm";

@Entity()
export class Zone {
    @Column( { primary: true, generated: true })
    id: number;

    @Column()
    status: boolean;

    @Column('jsonb', { nullable: false, default: []})
    features: string;

    @Column()
    name: string;

    @Column({ default: null })
    code: string;

    @Column({ default: null })
    external_id: string;

    @Column({ default: null })
    field_id: string;

    @Column({ default: null })
    soiltype: string;

    @Column({ default: null })
    variety: string;

    @Column({ default: null })
    company_id: string;

    @Column({ default: null })
    location: string;

    @OneToMany(() => Climate, (climate) => climate.zone)
    climates: Climate[];

    @OneToMany(() => Soilmoisture, (soilmoisture) => soilmoisture.zone)
    soilmoistures: Soilmoisture[];

    @DeleteDateColumn()
    deletedAt: Date;
}