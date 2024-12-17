import {Entity, Column, PrimaryGeneratedColumn,CreateDateColumn, UpdateDateColumn} from "typeorm";


@Entity({name:"Company"})
export class CompanyEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name:string;

    @Column()
    color: string;

    @CreateDateColumn()
    created : Date;

    @UpdateDateColumn()
    updated : Date;
}

