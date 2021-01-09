import {
  PrimaryGeneratedColumn,
  BaseEntity,
  Column,
  Entity,
  OneToMany,
} from 'typeorm';
import { Farm } from 'src/farm/farm.entity';
import { FarmerEquipment } from 'src/farmer-equipment/farmer.equipment.entity';

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

  @OneToMany(() => Farm, (farm: Farm) => farm.owner)
  public farms: Farm[];

  @OneToMany(() => FarmerEquipment, (equipments: FarmerEquipment) => equipments.farmer)
  public equipments: FarmerEquipment[];
}
