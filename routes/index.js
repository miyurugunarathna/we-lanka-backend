import express from "express";
import userRouter from "./user.route.js";
import categoryRouter from "./category.route.js";

const apiRouter = express.Router();

apiRouter.use("/user", userRouter);
apiRouter.use("/categories", categoryRouter);

export default apiRouter;
