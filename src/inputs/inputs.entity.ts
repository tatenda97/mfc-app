import {
    PrimaryGeneratedColumn,
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  } from 'typeorm';
  import {Projectinputs} from 'src/project-inputs/project.inputs.entity';
  import {Inventory} from 'src/inventory/inventory.entity'

 
  
  @Entity()
  export class Input extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    inputName: string;
  
    @Column()
    inputDescription: string;
  
    @Column()
    purchaseDate: Date;
  
    @Column()
    purchaseValue: String;
  
    @Column()
    usefulLife: Number;
    
  
    @Column()
    inputId: Number;

    @ManyToOne(() => Projectinputs, (projectInputs: Projectinputs) => projectInputs.id)
    @JoinColumn({ name: 'inputsId' })
    public projectInputs: Projectinputs;

    @ManyToOne(() =>Inventory, (inventory:Inventory)=> inventory.id)
    @JoinColumn({name:'inventoryId'})
    public inventory:Inventory
  }
  