import { Cart } from "../models/cart.model.js";
import AppError from "../utils/appError.js";

export const create = (data) =>
  Cart.create(data)
    .then((cart) => Promise.resolve(cart))
    .catch(() => {
      throw new AppError("Internal Server Error", 500);
    });

export const get = (id) =>
  Cart.findById(id)
    .populate("items.item")
    .then((cart) => Promise.resolve(cart))
    .catch(() => {
      throw new AppError("Internal Server Error", 500);
    });

export const findOne = (data) =>
  Cart.findOne(data)
    .populate("items.item")
    .then((cart) => Promise.resolve(cart))
    .catch(() => {
      throw new AppError("Internal Server Error", 500);
    });

export const getAll = () =>
  Cart.find()
    .populate("user")
    .populate("items.item")
    .then((carts) => Promise.resolve(carts))
    .catch(() => {
      throw new AppError("Internal Server Error", 500);
    });

export const update = (id, data) =>
  Cart.findByIdAndUpdate(id, data, { new: true })
    .then((cart) => Promise.resolve(cart))
    .catch(() => {
      throw new AppError("Internal Server Error", 500);
    });

export const remove = (id) =>
  Cart.findByIdAndDelete(id)
    .then((cart) => Promise.resolve(cart))
    .catch(() => {
      throw new AppError("Internal Server Error", 500);
    });
