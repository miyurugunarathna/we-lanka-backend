import {
  saveNewInventory,
  getInventoryList,
  updateInventory,
  getInventoryUsingId,
  deleteInventory,
} from "../services/index.js";
import Success from "../utils/success.js";

export const saveInventory = async (req, res) => {
  try {
    const inventory = await saveNewInventory(req.body);
    res.json(Success(inventory, "Inventory Created Successfully."));
  } catch (err) {
    res.status(err.status).json(err.message);
  }
};

export const getAllInventorys = async (req, res) => {
  try {
    const inventorys = await getInventoryList();
    res.json(Success(inventorys));
  } catch (err) {
    res.status(err.status).json(err.message);
  }
};

export const updateInventoryData = async (req, res) => {
  try {
    const updatedInventory = await updateInventory(req.params.id, req.body);
    res.json(
      Success(updatedInventory, "Inventory has been updated Successfully."),
    );
  } catch (err) {
    res.status(err.status).json(err.message);
  }
};

export const getInventoryById = async (req, res) => {
  try {
    const inventory = await getInventoryUsingId(req.params.id);
    res.json(Success(inventory));
  } catch (err) {
    res.status(err.status).json(err.message);
  }
};

export const removeInventory = async (req, res) => {
  try {
    const inventory = await deleteInventory(req.params.id);
    res.json(Success(inventory));
  } catch (err) {
    res.status(err.status).json(err.message);
  }
};
