import {
  modifyCartService,
  getCartService,
  getAllCartsService,
} from "../services/index.js";
import Success from "../utils/success.js";

export const modifyCart = async (req, res) => {
  try {
    const cart = await modifyCartService(req.body, req.user);
    res.json(Success(cart, "Modified cart successfully."));
  } catch (err) {
    res.status(err.status).json(err.message);
  }
};

export const getCart = async (req, res) => {
  try {
    const cart = await getCartService(req.user);
    res.json(Success(cart, "Get cart successfully."));
  } catch (err) {
    res.status(err.status).json(err.message);
  }
};

export const getCarts = async (_req, res) => {
  try {
    const carts = await getAllCartsService();
    res.json(Success(carts, "Get all carts successfully."));
  } catch (err) {
    res.status(err.status).json(err.message);
  }
};
