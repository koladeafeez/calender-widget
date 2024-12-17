import {Entity, Column, PrimaryGeneratedColumn,CreateDateColumn, UpdateDateColumn} from "typeorm";


@Entity({name:"Event"})
export class EventEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name:string;

    @Column()
    date: Date;

    @Column()
    location : string;

    @Column()
    availableTicket : number;

    @Column()
    shortDescription : string;

    @CreateDateColumn()
    created : Date;

    @UpdateDateColumn()
    updated : Date;
}

