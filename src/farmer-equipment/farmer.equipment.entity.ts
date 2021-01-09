import {
  PrimaryGeneratedColumn,
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

import { Farmer } from 'src/farmer/farmer.entity';

@Entity()
export class FarmerEquipment extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  equipmentName: string;

  @Column()
  identificationNumber: string;

  @Column({ default: 'Immovable property for this farm' })
  description: string;

  @Column()
  category: string;

  @Column({ nullable: true })
  quantity: number;

  @Column()
  equipmentValue: number;

  @Column()
  equipmentCapacity: number;

  @Column()
  manufacturer: string;

  @Column()
  farmerId: number;

  @ManyToOne(() => Farmer, (farmer: Farmer) => farmer.equipments)
  @JoinColumn({ name: 'farmerId' })
  public farmer: Farmer;
}
