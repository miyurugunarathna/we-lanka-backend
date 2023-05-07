import {
  createOrderService,
  getOrderService,
  getAllOrdersService,
  myOrdersService,
  updateOrderService,
} from "../services/index.js";
import Success from "../utils/success.js";

export const createOrder = async (req, res) => {
  try {
    const order = await createOrderService(req.body, req.user);
    res.json(Success(order, "Order created successfully."));
  } catch (err) {
    res.status(err.status).json(err.message);
  }
};

export const getOrder = async (req, res) => {
  try {
    const order = await getOrderService(req.params.id);
    res.json(Success(order, "Get order successfully."));
  } catch (err) {
    res.status(err.status).json(err.message);
  }
};

export const getOrders = async (_req, res) => {
  try {
    const orders = await getAllOrdersService();
    res.json(Success(orders, "Get all orders successfully."));
  } catch (err) {
    res.status(err.status).json(err.message);
  }
};

export const myOrders = async (req, res) => {
  try {
    const orders = await myOrdersService(req.user);
    res.json(Success(orders, "Get my orders successfully."));
  } catch (err) {
    res.status(err.status).json(err.message);
  }
};

export const updateOrder = async (req, res) => {
  try {
    const order = await updateOrderService(req.params.id, req.body);
    res.json(Success(order, "Order updated successfully."));
  } catch (err) {
    res.status(err.status).json(err.message);
  }
};
