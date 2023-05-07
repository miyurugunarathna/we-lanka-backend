import mongoose from "mongoose";

const { Schema } = mongoose;

const OrderSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  items: [
    {
      item: {
        type: Schema.Types.ObjectId,
        ref: "Product",
      },
      quantity: Number,
    },
  ],
  status: {
    type: String,
    enum: ["INITIALIZED", "PENDING", "SHIPPED", "DELIVERED", "CANCELLED"],
    default: "INITIALIZED",
  },
});

export const Order = mongoose.model("Order", OrderSchema);
