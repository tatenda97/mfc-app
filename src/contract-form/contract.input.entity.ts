import {
  PrimaryGeneratedColumn,
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
} from 'typeorm';
import { ContractForm } from './contract.form.entity';

@Entity()
export class ContractInput extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  inputName: string;

  @Column()
  description: string;

  @Column()
  category: string;

  @Column()
  quantity: number;

  @Column()
  weight: number;

  @Column()
  unitCost: number;

  @Column()
  contractId: number;

  @ManyToOne(() => ContractForm, (contract: ContractForm) => contract.inputs)
  public contract: ContractForm;
}
