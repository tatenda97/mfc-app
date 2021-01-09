import {
  PrimaryGeneratedColumn,
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Farmer } from 'src/farmer/farmer.entity';
import { FarmAsset } from 'src/farm-asset/farmer.asset.entity';

@Entity()
export class Farm extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  plotNumber: string;

  @Column()
  ownerId: string;

  @ManyToOne(() => Farmer, (owner: Farmer) => owner.farms)
  public owner: Farmer;

  @OneToMany(() => FarmAsset, (assets: FarmAsset) => assets.farm)
  public assets: FarmAsset[];
}
