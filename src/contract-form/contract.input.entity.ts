import {
  PrimaryGeneratedColumn,
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { ContractForm } from './contract.form.entity';

@Entity()
export class ContractInput extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  inputName: string;

  @Column({ default: 'Input given to user' })
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
  @JoinColumn({ name: 'contractId' })
  public contract: ContractForm;
}
