import { 
    Controller,
    Post,
    Get,
    Patch,
    Delete,
    Body,
    Param,
 } from '@nestjs/common';
 import {InventoryService} from './inventory.service';
 import {CreateInventoryDTO} from './dto/create-inventory.dto';
 import {Inventory} from './inventory.entity'


@Controller('inventory')
export class InventoryController {
  constructor(private inventoryService:InventoryService){}
  
  @Post('create')
  public async createInventory(
      @Body() createInventoryDto:CreateInventoryDTO,
  ):Promise<Inventory>{
      const inventory = await this.inventoryService.createInventory(createInventoryDto);
      return inventory
    }
    @Get('all')
    public async getInventory(): Promise<Inventory[]> {
      const inventory = await this.inventoryService.getInventory();
      return inventory;
    }
  
    @Get('/:inventoryId')
    public async getInventor(@Param('inputId') Inventory: number) {
      const inventory = await this.inventoryService.getInventory();
      return inventory;
    }
  
    @Patch('/edit/:inventoryId')
    public async editInventory(
      @Body() CreateInventoryDTO: CreateInventoryDTO,
      @Param('inventoryId') inventoryId: number,
    ): Promise<Inventory> {
      const inventory = await this.inventoryService.editInventory(
        inventoryId,
        CreateInventoryDTO,
      );
      return inventory;
    }
  
    @Delete('/delete/:inventoryId')
    public async deleteinventory(@Param('inventoryId') InventoryId: number) {
      const deletedInventory = await this.inventoryService.deleteInventory(InventoryId);
      return deletedInventory;
    }
  }

