import mongoose from "mongoose";

const { Schema } = mongoose;

const InventorySchema = new Schema(
  {
    categoryId: {
      type: Schema.Types.ObjectId,
      ref: "Category",
    },
    productId: {
      type: Schema.Types.ObjectId,
      ref: "Product",
    },
    locationId: {
      type: Schema.Types.ObjectId,
      ref: "Location",
    },
    quantity: Number,
  },
  { timestamps: true },
);

export const Inventory = mongoose.model("Inventory", InventorySchema);
