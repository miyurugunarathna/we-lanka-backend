import express from "express";
import {
  getInventoryById,
  removeInventory,
  saveInventory,
  getAllInventorys,
  updateInventoryData,
} from "../controllers/index.js";
import { authenticate } from "../middleware/auth.middleware.js";

const inventoryRouter = express.Router();

inventoryRouter.post("/", authenticate, saveInventory);
inventoryRouter.get("/", authenticate, getAllInventorys);
inventoryRouter.get("/:id", authenticate, getInventoryById);
inventoryRouter.put("/:id", authenticate, updateInventoryData);
inventoryRouter.delete("/:id", authenticate, removeInventory);

export default inventoryRouter;
