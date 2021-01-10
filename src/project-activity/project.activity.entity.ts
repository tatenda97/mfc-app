import {
  PrimaryGeneratedColumn,
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Project } from "src/project/project.entity";

@Entity()
export class ProjectActivity extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    activityName: string;
  
    @Column()
    activityDescription: string;

    @Column()
    activityStatus: string;
  
    @Column()
    duration: number;
  
    @Column()
    startDate: Date;
  
    @Column({nullable:true})
    endDate: Date;
  
    @Column()
    requirementId: string;
  
    @Column()
    projectManagerId: number;
    
    @Column()
    projectId: number;
  
    @ManyToOne(() => Project, (project: Project) => project.activities)
    @JoinColumn({ name: 'projectId' })
    public project: Project;
  
    //inputs
    // @OneToMany(
    //     () => ProjectActivity,
    //     (activities: ProjectActivity) => activities.project,
    //   )
    //   public activities: ProjectActivity[];
  
    
  }
  