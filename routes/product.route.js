import express from "express";
import multer from "multer";
import {
  getAllProducts,
  getProductById,
  getProductsByCategoryId,
  removeProduct,
  saveProduct,
  updateProductData,
} from "../controllers/index.js";
import { authenticate } from "../middleware/auth.middleware.js";
import { storage } from "../utils/fileStorage.js";

const upload = multer({ storage });

const productRouter = express.Router();

productRouter.post("/", upload.single("image"), authenticate, saveProduct);
productRouter.get("/", authenticate, getAllProducts);
productRouter.get("/:id", authenticate, getProductById);
productRouter.get("/category/:id", authenticate, getProductsByCategoryId);
productRouter.put("/:id", authenticate, updateProductData);
productRouter.delete("/:id", authenticate, removeProduct);

export default productRouter;
