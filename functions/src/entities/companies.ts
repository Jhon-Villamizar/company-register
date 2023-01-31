import {BaseEntity, Column, Entity, JoinColumn, OneToOne, PrimaryColumn} from "typeorm";
import {Users} from "./users";

@Entity()
export class Companies extends BaseEntity {
    @PrimaryColumn()
      nit: string;

    @Column()
      name: string;

    @Column()
      address: string;

    @Column()
      phone: string;

    @Column()
      userId: string;

    @OneToOne(() => Users)
    @JoinColumn()
      user: Users;
}
