import { PrimaryGeneratedColumn, BaseEntity, Column, Entity, ManyToOne } from 'typeorm';
import { Farmer } from 'src/farmer/farmer.entity';

@Entity()
export class Contract extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  contractorName: string;

  @Column()
  farmerName: string;

  @Column()
  farmerIdNumber: string;

  @Column()
  contractorRepName: string;

  @Column()
  contractorRepId: string;

  @Column()
  contractorRepPhoneNo: string;

  @Column()
  witnessName: String;

  @Column()
  witnessIDNumber: String;

  @Column()
  contractDuration: String;

  @Column()
  startDate: Date;

  @Column()
  signedDate: Date;

  @Column()
  endDate: Date;

  @Column()
  contractCategory: String;

  @Column()
  contractValue: String;
}