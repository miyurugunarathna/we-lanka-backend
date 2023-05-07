import express from "express";
import {
  createOrder,
  getOrder,
  getOrders,
  myOrders,
  updateOrder,
} from "../controllers/index.js";
import { authenticate } from "../middleware/auth.middleware.js";

const userRouter = express.Router();

userRouter.post("/", authenticate, createOrder);
userRouter.get("/:id", authenticate, getOrder);
userRouter.get("/", authenticate, getOrders);
userRouter.get("/me", authenticate, myOrders);
userRouter.put("/:id", authenticate, updateOrder);

export default userRouter;
