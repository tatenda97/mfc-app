import { Module } from '@nestjs/common';
import { FarmService } from './farm.service';
import { FarmController } from './farm.controller';

import { FarmRepository } from './farm.repository';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([FarmRepository])],
  providers: [FarmService],
  controllers: [FarmController]
  
})
export class FarmModule {}
