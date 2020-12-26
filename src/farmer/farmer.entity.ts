import { PrimaryGeneratedColumn, BaseEntity, Column, Entity } from 'typeorm';

@Entity()
export class Farmer extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  surname: string;
  
  @Column()
  nationalID: string;

  @Column()
  dateOfBirth: Date;

  @Column()
  gender: string;

  @Column()
  description: string;

}