import { Zone } from "src/zones/entities/zone.entity";
import { Column, DeleteDateColumn, Entity, ManyToOne } from "typeorm";

@Entity()
export class Climate {
    @Column( { primary: true, generated: true })
    id: number;

    @Column()
    deviceId: string;

    @Column()
    TMS: number;

    @Column('decimal', { precision: 10, scale: 6, nullable: true })
    stm1: number;

    @Column('decimal', { precision: 10, scale: 6, nullable: true })
    tem1: number;

    @Column('decimal', { precision: 10, scale: 6, nullable: true })
    hum1: number;

    @Column('decimal', { precision: 10, scale: 6, nullable: true })
    solr: number;

    @Column('decimal', { precision: 10, scale: 6, nullable: true })
    prec: number;

    @Column('decimal', { precision: 10, scale: 6, nullable: true })
    wind: number;

    @Column('decimal', { precision: 10, scale: 6, nullable: true })
    wins: number;

    @Column('decimal', { precision: 10, scale: 6, nullable: true })
    tw: number;

    @Column('decimal', { precision: 10, scale: 6, nullable: true })
    dwp: number;

    @Column()
    createdAt: Date;

    @ManyToOne(() => Zone, (zone) => zone.id, {
        eager: true
    })
    zone: number;

    @DeleteDateColumn()
    deletedAt: Date;
}
