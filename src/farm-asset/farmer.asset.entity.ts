import {
  PrimaryGeneratedColumn,
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

import { Farm } from '../farm/farm.entity';

@Entity()
export class FarmAsset extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  assetName: string;

  @Column()
  identificationNumber: string;

  @Column({ default: 'Immovable property for this farm' })
  description: string;

  @Column()
  category: string;

  @Column({ nullable: true })
  quantity: number;

  @Column()
  assetValue: number;

  @Column()
  assertCapacity: number;

  @Column()
  assetMake: string;

  @Column()
  farmId: number;

  @ManyToOne(() => Farm, (farm: Farm) => farm.assets)
  @JoinColumn({ name: 'farmId' })
  public farm: Farm;
}
