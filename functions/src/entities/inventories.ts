import {BaseEntity, Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn} from "typeorm";
import {Companies} from "./companies";

@Entity()
export class Inventories extends BaseEntity {
    @PrimaryGeneratedColumn()
      id: number;

    @Column()
      name: string;

    @Column()
      serial: string;

    @Column()
      quantity: number;

    @Column()
      companyNit: number;

    @OneToOne(() => Companies)
    @JoinColumn()
      company: Companies;
}
