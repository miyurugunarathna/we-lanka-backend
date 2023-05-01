import express from "express";
import {
  getAllCategories,
  getCategoryById,
  removeCategory,
  saveCategory,
  updateCategoryData,
} from "../controllers/index.js";
import { authenticate } from "../middleware/auth.middleware.js";

const categoryRouter = express.Router();

categoryRouter.post("/", authenticate, saveCategory);
categoryRouter.get("/", authenticate, getAllCategories);
categoryRouter.get("/:id", authenticate, getCategoryById);
categoryRouter.put("/:id", authenticate, updateCategoryData);
categoryRouter.delete("/:id", authenticate, removeCategory);

export default categoryRouter;
