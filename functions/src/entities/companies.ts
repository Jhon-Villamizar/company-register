import {BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryColumn} from "typeorm";
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

    @ManyToOne(() => Users)
    @JoinColumn()
      user: Users;
}
