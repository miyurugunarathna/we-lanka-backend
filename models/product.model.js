import mongoose from "mongoose";

const { Schema } = mongoose;

const ProductSchema = new Schema({
  name: String,
  price: Number,
  description: String,
  image: String,
  createdOn: Date,
  categoryId: String,
});

export const Product = mongoose.model("Product", ProductSchema);
