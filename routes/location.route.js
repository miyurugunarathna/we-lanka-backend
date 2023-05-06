import express from "express";
import {
  getLocationById,
  removeLocation,
  saveLocation,
  getAllLocations,
  updateLocationData,
  getLocationsByCategoryId,
} from "../controllers/index.js";
import { authenticate } from "../middleware/auth.middleware.js";

const locationRouter = express.Router();

locationRouter.post("/", authenticate, saveLocation);
locationRouter.get("/", authenticate, getAllLocations);
locationRouter.get("/:id", authenticate, getLocationById);
locationRouter.get("/category/:id", authenticate, getLocationsByCategoryId);
locationRouter.put("/:id", authenticate, updateLocationData);
locationRouter.delete("/:id", authenticate, removeLocation);

export default locationRouter;
