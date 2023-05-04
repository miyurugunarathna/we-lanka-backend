import { Product } from "../models/index.js";
import AppError from "../utils/appError.js";

export const saveProduct = (productData) => {
  return new Promise((resolve, reject) => {
    Product.create(productData)
      .then((product) => {
        resolve(product);
      })
      .catch(() => {
        reject(new AppError("Internal server error.", 500));
      });
  });
};

export const getAllProducts = () => {
  return new Promise((resolve, reject) => {
    Product.find()
      .select("_id name")
      .then((data) => {
        resolve(data);
      })
      .catch(() => {
        reject(new AppError("Internal server error.", 500));
      });
  });
};

export const getProduct = (data) => {
  return new Promise((resolve, reject) => {
    Product.findOne(data)
      .select("_id name")
      .then((product) => {
        resolve(product);
      })
      .catch(() => {
        reject(new AppError("Internal server error.", 500));
      });
  });
};

export const getProductsByCategoryId = (categoryId) => {
  return new Promise((resolve, reject) => {
    Product.find({ categoryId })
      .select("-__v")
      .then((products) => {
        resolve(products);
      })
      .catch(() => {
        reject(new AppError("Internal server error.", 500));
      });
  });
};

export const getProductById = (id) => {
  return new Promise((resolve, reject) => {
    Product.findById(id)
      .select("_id name")
      .then((data) => {
        resolve(data);
      })
      .catch(() => {
        reject(new AppError("Internal server error.", 500));
      });
  });
};

export const RemoveProduct = (id) => {
  return new Promise((resolve, reject) => {
    Product.findByIdAndDelete(id)
      .then(() => {
        resolve("Product has been removed successfully");
      })
      .catch(() => {
        reject(new AppError("Internal server error.", 500));
      });
  });
};

export const UpdateProduct = (id, data) => {
  return new Promise((resolve, reject) => {
    Product.findByIdAndUpdate(id, data)
      .then((product) => {
        resolve(product);
      })
      .catch(() => {
        reject(new AppError("Internal server error.", 500));
      });
  });
};