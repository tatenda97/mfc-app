import {
  PrimaryGeneratedColumn,
  BaseEntity,
  Column,
  Entity,
  OneToMany,
} from 'typeorm';
import { ContractInput } from './contract.input.entity';

@Entity()
export class ContractForm extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  farmerName: string;

  @Column()
  farmerIDNumber: string;

  @Column()
  contactNumber: string;

  @Column()
  village: string;

  @Column()
  plotNumber: string;

  @Column()
  contractorName: string;

  @Column()
  contractorID: string;

  @Column()
  representativeName: string;

  @Column()
  representativeID: string;

  @Column()
  representativePhoneNumber: string;

  @Column()
  contractCategory: string;

  @Column()
  contractTenure: string;

  @Column()
  contractDescription: string;

  @Column()
  contractValue: number;

  @Column()
  repaymentValue: number;

  @Column()
  applicationDate: Date;

  @OneToMany(() => ContractInput, (input: ContractInput) => input.contract)
  public inputs: ContractInput[];
}
