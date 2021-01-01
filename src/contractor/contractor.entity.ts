import { PrimaryGeneratedColumn, BaseEntity, Column, Entity } from 'typeorm';

@Entity()
export class Contractor extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;
   
  @Column({unique: true})
  contractorName: string;

  @Column()
  description: string;

  @Column()
  category: string;

  @Column()
  address: string;

  @Column()
  phoneNumber: string;

  @Column()
  contactPerson: string;

}