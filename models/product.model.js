import mongoose from "mongoose";

const { Schema } = mongoose;

const ProductSchema = new Schema(
  {
    name: String,
    price: Number,
    description: String,
    image: {
      type: String,
      default: "",
    },
    categoryId: String,
  },
  { timestamps: true },
);

export const Product = mongoose.model("Product", ProductSchema);
