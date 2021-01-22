import { Module } from '@nestjs/common';
import { InputsService } from './inputs.service';
import { InputsController } from './inputs.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InputsRepository } from './inputs.repository';


@Module({
  imports: [TypeOrmModule.forFeature([InputsRepository])],
  providers: [InputsService],
  controllers: [InputsController],
})
export class InputsModule {}
