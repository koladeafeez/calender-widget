import {Entity, Column, PrimaryGeneratedColumn,CreateDateColumn, UpdateDateColumn, TableForeignKey} from "typeorm";


@Entity({name:"Booking"})
export class BookingEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    eventId:number;

    @Column()
    name: string;

    @Column()
    ticketCount: number;

    @CreateDateColumn()
    created : Date;

    @UpdateDateColumn()
    updated : Date;
}

