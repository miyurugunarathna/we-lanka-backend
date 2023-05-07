import express from "express";
import userRouter from "./user.route.js";
import categoryRouter from "./category.route.js";
import locationRouter from "./location.route.js";
import productRouter from "./product.route.js";
import inventoryRouter from "./inventory.route.js";
import cartRouter from "./cart.route.js";
import orderRouter from "./order.route.js";

const apiRouter = express.Router();

apiRouter.use("/user", userRouter);
apiRouter.use("/categories", categoryRouter);
apiRouter.use("/locations", locationRouter);
apiRouter.use("/products", productRouter);
apiRouter.use("/inventories", inventoryRouter);
apiRouter.use("/carts", cartRouter);
apiRouter.use("/orders", orderRouter);

export default apiRouter;
