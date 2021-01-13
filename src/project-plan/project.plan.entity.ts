import {
  PrimaryGeneratedColumn,
  BaseEntity,
  Column,
  Entity,
  OneToOne,
  JoinColumn,
} from 'typeorm';

import { Project } from 'src/project/project.entity';
@Entity()
export class ProjectPlan extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  planName: string;

  @Column()
  planDescription: string;

  @Column()
  createDate: Date;

  @Column()
  startDate: Date;

  @Column()
  duration: number;

  @Column()
  estimatedEndDate: Date;

  @Column()
  projectId: number;

  @Column()
  budget: number;

  @OneToOne(() => Project)
  @JoinColumn({ name: 'projectId' })
  project: Project;
}
