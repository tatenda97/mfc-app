import { Module } from '@nestjs/common';
import { InventoryController } from './inventory.controller';
import { InventoryService } from './inventory.service';
import {InventoryRepository} from './inventory.repository'
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([InventoryRepository])],
  controllers: [InventoryController],
  providers: [InventoryService]
})
export class InventoryModule {}
