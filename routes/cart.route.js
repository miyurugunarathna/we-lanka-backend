import express from "express";
import { celebrate } from "celebrate";
import { ModifyCartBodySchema } from "../schema/index.js";
import { modifyCart, getCart, getCarts } from "../controllers/index.js";
import { authenticate } from "../middleware/auth.middleware.js";

const userRouter = express.Router();

userRouter.post("/", celebrate({ body: ModifyCartBodySchema }), modifyCart);
userRouter.get("/me", authenticate, getCart);
userRouter.get("/", authenticate, getCarts);

export default userRouter;
