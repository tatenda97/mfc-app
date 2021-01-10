import {
  PrimaryGeneratedColumn,
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Farmer } from 'src/farmer/farmer.entity';
import { Contractor } from 'src/contractor/contractor.entity';
import { ProjectActivity } from 'src/project-activity/project.activity.entity';

@Entity()
export class Project extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  projectName: string;

  @Column()
  projectDescription: string;

  @Column()
  duration: number;

  @Column()
  startDate: Date;

  @Column({nullable:true})
  endDate: Date;

  @Column()
  projectContractorId: number;

  @Column()
  projectType: string;

  @Column()
  projectManagerId: number;
  
  @Column()
  ownerId: number;

  @ManyToOne(() => Farmer, (farmer: Farmer) => farmer.projects)
  @JoinColumn({ name: 'ownerId' })
  public farmer: Farmer;

  @ManyToOne(() => Contractor, (contractor: Contractor) => contractor.projects)
  @JoinColumn({ name: 'projectContractorId' })
  public contractor: Contractor;

  
    @OneToMany(
        () => ProjectActivity,
        (activity: ProjectActivity) => activity.project,
      )
      public activities: ProjectActivity[];

  
}
