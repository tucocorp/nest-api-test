import { Zone } from "src/zones/entities/zone.entity";
import { Column, DeleteDateColumn, Entity, ManyToOne } from "typeorm";

@Entity()
export class Soilmoisture {
    @Column( { primary: true, generated: true })
    id: number;

    @Column()
    deviceId: string;

    @Column()
    TMS: number;

    @Column('decimal', { precision: 10, scale: 6, nullable: true })
    smo1: number;

    @Column('decimal', { precision: 10, scale: 6, nullable: true })
    sec1: number;

    @Column('decimal', { precision: 10, scale: 6, nullable: true })
    sea1: number;

    @Column()
    createdAt: Date;

    @ManyToOne(() => Zone, (zone) => zone.id, {
        eager: true
    })
    zone: number;

    @DeleteDateColumn()
    deletedAt: Date;
}
