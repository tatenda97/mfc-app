import { Input } from 'src/inputs/inputs.entity';
import { InputsService } from 'src/inputs/inputs.service';
import {
  PrimaryGeneratedColumn,
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  JoinColumn,
} from 'typeorm';

@Entity()
export class Projectinputs extends BaseEntity {
  [x: string]: any;
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  TotalCost: string;

  @Column()
  applicationdate: Date;

  @Column()
  quantity: Number;

  @OneToMany(() => Input, (input: Input) => input.id)
  public inputs: Input[];
}
