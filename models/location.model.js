import mongoose from "mongoose";

const { Schema } = mongoose;

const LocationSchema = new Schema(
  {
    name: String,
  },
  { timestamps: true },
);

export const Location = mongoose.model("Location", LocationSchema);
