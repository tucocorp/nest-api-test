import { Column, DeleteDateColumn, Entity } from "typeorm";

@Entity()
export class Zone {
    @Column( { primary: true, generated: true })
    id: number;

    @Column()
    status: boolean;

    @Column()
    name: string;

    @Column()
    code: string;

    @DeleteDateColumn()
    deletedAt: Date;
}
