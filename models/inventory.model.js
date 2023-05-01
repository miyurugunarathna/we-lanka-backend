import mongoose from "mongoose";

const { Schema } = mongoose;

const InventorySchema = new Schema({
  categoryId: String,
  productId: String,
  locationId: String,
  quantity: Number,
  createdOn: Date,
});

export const Inventory = mongoose.model("Inventory", InventorySchema);
