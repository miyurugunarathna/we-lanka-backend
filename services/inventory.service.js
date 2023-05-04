import {
  saveInventory,
  getInventoryById,
  RemoveInventory,
  getAllInventorys,
} from "../repository/index.js";
import AppError from "../utils/appError.js";

export const saveNewInventory = async (inventory) => {
  try {
    await saveInventory(inventory);
    return Promise.resolve("Inventory Created Successfully.");
  } catch (error) {
    throw new AppError(error.message, error.status);
  }
};

export const getInventoryList = async () => {
  try {
    const inventorys = await getAllInventorys();
    return inventorys;
  } catch (error) {
    throw new AppError(error.message, error.status);
  }
};

export const updateInventory = async (id, data) => {
  try {
    const existingInventory = await getInventoryById(id);
    if (!existingInventory)
      throw new AppError(`Inventory with id ${id} not found.`, 404);

    existingInventory.set(data);
    await existingInventory.save();

    return Promise.resolve(`Inventory updated successfully.`);
  } catch (error) {
    throw new AppError(error.message, error.status);
  }
};

export const getInventoryUsingId = async (id) => {
  try {
    const existingInventory = await getInventoryById(id);
    if (!existingInventory)
      throw new AppError(`Inventory with id ${id} not found.`, 404);

    return Promise.resolve(existingInventory);
  } catch (error) {
    throw new AppError(error.message, error.status);
  }
};

export const deleteInventory = async (id) => {
  try {
    const existingInventory = await getInventoryById(id);
    if (!existingInventory)
      throw new AppError(`Inventory with id ${id} not found.`, 404);

    const res = await RemoveInventory(id);

    return Promise.resolve(res);
  } catch (error) {
    throw new AppError(error.message, error.status);
  }
};
