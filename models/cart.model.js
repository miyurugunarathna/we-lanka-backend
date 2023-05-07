import mongoose from "mongoose";

const { Schema } = mongoose;

const CartSchema = new Schema({
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
});

export const Cart = mongoose.model("Cart", CartSchema);
