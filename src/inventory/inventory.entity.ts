import { TypeOrmModule } from "@nestjs/typeorm";
import{
    PrimaryGeneratedColumn,
    BaseEntity,
    OneToMany,
    Entity,
    Column,
    ManyToOne
} from 'typeorm';
import { Input } from 'src/inputs/inputs.entity';

@Entity()
export class Inventory extends BaseEntity{
    @PrimaryGeneratedColumn()
    id:Number;

    @Column()
    inventoryName:string;

    @Column()
    description:string;
    
    @Column()
    receivedDate:Date;

    @Column()
    supplierName:string;

    @Column()
    availableInStore:Boolean;

    @Column()
    creationDate:Date;

    @Column()
    quantity:Number;

    @Column()
    dispatchDate:Date;
    
    @OneToMany(()=> Input, (input:Input)=>input.id)
    public input:Input[];



}

