import { create, get, findOne, getAll, update } from "../repository/index.js";
import AppError from "../utils/appError.js";

export const modifyCartService = async (data, user) => {
  try {
    let cart = await findOne({ user: user._id });
    if (!cart) {
      cart = await create({ user: user._id, items: data });
    } else {
      cart = await update(cart._id, { user: user._id, items: data });
    }
    return Promise.resolve(cart);
  } catch (error) {
    throw new AppError(error.message, error.status);
  }
};

export const getCartService = async (user) => {
  try {
    const cart = await get(user._id);
    return Promise.resolve(cart);
  } catch (error) {
    throw new AppError(error.message, error.status);
  }
};

export const getAllCartsService = async () => {
  try {
    const carts = await getAll();
    return Promise.resolve(carts);
  } catch (error) {
    throw new AppError(error.message, error.status);
  }
};
