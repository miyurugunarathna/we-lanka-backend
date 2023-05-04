import {
  getProduct,
  saveProduct,
  getProductById,
  RemoveProduct,
  getAllProducts,
  getProductsByCategoryId,
} from "../repository/index.js";
import AppError from "../utils/appError.js";

export const saveNewProduct = async (product) => {
  try {
    const existingProduct = await getProduct({ name: product?.name });
    if (existingProduct)
      throw new AppError(
        `Product with name ${product.name} already exists.`,
        400,
      );

    await saveProduct(product);
    return Promise.resolve("Product Created Successfully.");
  } catch (error) {
    throw new AppError(error.message, error.status);
  }
};

export const getProductsUsingCategoryId = async (locationId) => {
  try {
    const products = await getProductsByCategoryId(locationId);
    return Promise.resolve(products);
  } catch (error) {
    throw new AppError(error.message, error.status);
  }
};

export const getProductList = async () => {
  try {
    const products = await getAllProducts();
    return products;
  } catch (error) {
    throw new AppError(error.message, error.status);
  }
};

export const updateProduct = async (id, data) => {
  try {
    const existingProduct = await getProductById(id);
    if (!existingProduct)
      throw new AppError(`Product with id ${id} not found.`, 404);

    existingProduct.set(data);
    await existingProduct.save();

    return Promise.resolve(`Product updated successfully.`);
  } catch (error) {
    throw new AppError(error.message, error.status);
  }
};

export const getProductUsingId = async (id) => {
  try {
    const existingProduct = await getProductById(id);
    if (!existingProduct)
      throw new AppError(`Product with id ${id} not found.`, 404);

    return Promise.resolve(existingProduct);
  } catch (error) {
    throw new AppError(error.message, error.status);
  }
};

export const deleteProduct = async (id) => {
  try {
    const existingProduct = await getProductById(id);
    if (!existingProduct)
      throw new AppError(`Product with id ${id} not found.`, 404);

    const res = await RemoveProduct(id);

    return Promise.resolve(res);
  } catch (error) {
    throw new AppError(error.message, error.status);
  }
};
