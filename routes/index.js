import express from "express";
import userRouter from "./user.route.js";
import categoryRouter from "./category.route.js";
import locationRouter from "./location.route.js";

const apiRouter = express.Router();

apiRouter.use("/user", userRouter);
apiRouter.use("/categories", categoryRouter);
apiRouter.use("/locations", locationRouter);

export default apiRouter;
