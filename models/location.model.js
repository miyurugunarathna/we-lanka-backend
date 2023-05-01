import mongoose from "mongoose";

const { Schema } = mongoose;

const LocationSchema = new Schema({
  name: String,
});

export const Location = mongoose.model("Location", LocationSchema);
