import mongoose from "mongoose";

const { Schema } = mongoose;

const CategorySchema = new Schema(
  {
    name: String,
  },
  { timestamps: true },
);

export const Category = mongoose.model("Category", CategorySchema);
