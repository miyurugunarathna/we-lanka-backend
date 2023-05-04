import {
  saveNewProduct,
  getProductList,
  updateProduct,
  getProductUsingId,
  deleteProduct,
  getProductsUsingCategoryId,
} from "../services/index.js";
import Success from "../utils/success.js";

export const saveProduct = async (req, res) => {
  try {
    const product = await saveNewProduct(req.body);
    res.json(Success(product, "Product Created Successfully."));
  } catch (err) {
    res.status(err.status).json(err.message);
  }
};

export const getAllProducts = async (req, res) => {
  try {
    const products = await getProductList();
    res.json(Success(products));
  } catch (err) {
    res.status(err.status).json(err.message);
  }
};

export const updateProductData = async (req, res) => {
  try {
    const updatedProduct = await updateProduct(req.params.id, req.body);
    res.json(Success(updatedProduct, "Product has been updated Successfully."));
  } catch (err) {
    res.status(err.status).json(err.message);
  }
};

export const getProductById = async (req, res) => {
  try {
    const product = await getProductUsingId(req.params.id);
    res.json(Success(product));
  } catch (err) {
    res.status(err.status).json(err.message);
  }
};

export const removeProduct = async (req, res) => {
  try {
    const product = await deleteProduct(req.params.id);
    res.json(Success(product));
  } catch (err) {
    res.status(err.status).json(err.message);
  }
};

export const getProductsByCategoryId = async (req, res) => {
  try {
    const product = await getProductsUsingCategoryId(req.params.id);
    res.json(Success(product));
  } catch (err) {
    res.status(err.status).json(err.message);
  }
};
