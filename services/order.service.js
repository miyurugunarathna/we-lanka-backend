import {
  create,
  get,
  filter,
  getAll,
  update,
} from "../repository/order.repository.js";
import AppError from "../utils/appError.js";

export const createOrderService = async (data, user) => {
  try {
    const order = await create({ user: user._id, items: data });
    return Promise.resolve(order);
  } catch (error) {
    throw new AppError(error.message, error.status);
  }
};

export const getOrderService = async (id) => {
  try {
    const order = await get(id);
    return Promise.resolve(order);
  } catch (error) {
    throw new AppError(error.message, error.status);
  }
};

export const getAllOrdersService = async () => {
  try {
    const orders = await getAll();
    return Promise.resolve(orders);
  } catch (error) {
    throw new AppError(error.message, error.status);
  }
};

export const myOrdersService = async (user) => {
  try {
    const orders = await filter({ user: user._id });
    return Promise.resolve(orders);
  } catch (error) {
    throw new AppError(error.message, error.status);
  }
};

export const updateOrderService = async (id, data) => {
  try {
    const order = await update(id, data);
    return Promise.resolve(order);
  } catch (error) {
    throw new AppError(error.message, error.status);
  }
};
