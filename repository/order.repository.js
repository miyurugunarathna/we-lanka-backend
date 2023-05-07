import { Order } from "../models/index.js";
import AppError from "../utils/appError.js";

export const create = (data) =>
  Order.create(data)
    .then((order) => Promise.resolve(order))
    .catch(() => {
      throw new AppError("Internal Server Error", 500);
    });

export const get = (id) =>
  Order.findById(id)
    .populate("items.item")
    .then((order) => Promise.resolve(order))
    .catch(() => {
      throw new AppError("Internal Server Error", 500);
    });

export const filter = (data) =>
  Order.find(data)
    .populate("items.item")
    .then((orders) => Promise.resolve(orders))
    .catch(() => {
      throw new AppError("Internal Server Error", 500);
    });

export const getAll = () =>
  Order.find()
    .populate("user")
    .populate("items.item")
    .then((orders) => Promise.resolve(orders))
    .catch(() => {
      throw new AppError("Internal Server Error", 500);
    });

export const update = (id, data) =>
  Order.findByIdAndUpdate(id, data, { new: true })
    .then((order) => Promise.resolve(order))
    .catch(() => {
      throw new AppError("Internal Server Error", 500);
    });

export const remove = (id) =>
  Order.findByIdAndDelete(id)
    .then((order) => Promise.resolve(order))
    .catch(() => {
      throw new AppError("Internal Server Error", 500);
    });
