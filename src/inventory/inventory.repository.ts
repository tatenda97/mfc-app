import { Repository, EntityRepository } from 'typeorm';
import { Inventory } from './inventory.entity';
import { CreateInventoryDTO } from './dto/create-inventory.dto';

@EntityRepository(Inventory)
export class InventoryRepository extends Repository<Inventory> {
  public async createInventory(createInventoryDto: CreateInventoryDTO): Promise<Inventory> {
    const {
      inventoryName,
      description,
      receivedDate,
      supplierName,
      availableInStore,
      creationDate,
      quantity,
      dispatchDate
    } = createInventoryDto;

    const inventory = new Inventory();
    inventory.inventoryName = inventoryName;
    inventory.description = description;
    inventory.receivedDate = receivedDate;
    inventory.supplierName = supplierName;
    inventory.availableInStore = availableInStore;
    inventory.creationDate = creationDate;
    inventory.quantity = quantity;
    inventory.dispatchDate = dispatchDate,
    await inventory.save();
    return inventory;
  }

  public async editInventory(
    createInventoryDto: CreateInventoryDTO,
    editedInventory: Inventory,
  ): Promise<Inventory> {
    const {
      inventoryName,
      description,
      receivedDate,
      supplierName,
      availableInStore,
      creationDate,
      quantity,
      dispatchDate,
    } = createInventoryDto;

    editedInventory.inventoryName = inventoryName;
    editedInventory.description = description;
    editedInventory.receivedDate = receivedDate;
    editedInventory.supplierName = supplierName;
    editedInventory.availableInStore = availableInStore;
    editedInventory.creationDate = creationDate;
    editedInventory.quantity = quantity;
    editedInventory.dispatchDate =dispatchDate

    await editedInventory.save();

    return editedInventory;
  }
}
