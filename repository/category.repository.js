import { Category } from "../models/index.js";
import AppError from "../utils/appError.js";

export const saveCategory = (categoryData) => {
  return new Promise((resolve, reject) => {
    Category.create(categoryData)
      .then((category) => {
        resolve(category);
      })
      .catch(() => {
        reject(new AppError("Internal server error.", 500));
      });
  });
};

export const getAllCategories = () => {
  return new Promise((resolve, reject) => {
    Category.find()
      .select("_id name")
      .then((data) => {
        resolve(data);
      })
      .catch(() => {
        reject(new AppError("Internal server error.", 500));
      });
  });
};

export const getCategory = (data) => {
  return new Promise((resolve, reject) => {
    Category.findOne(data)
      .select("_id name")
      .then((category) => {
        resolve(category);
      })
      .catch(() => {
        reject(new AppError("Internal server error.", 500));
      });
  });
};

export const getCategoryById = (id) => {
  return new Promise((resolve, reject) => {
    Category.findById(id)
      .select("_id name")
      .then((data) => {
        resolve(data);
      })
      .catch(() => {
        reject(new AppError("Internal server error.", 500));
      });
  });
};

export const RemoveCategory = (id) => {
  return new Promise((resolve, reject) => {
    Category.findByIdAndDelete(id)
      .then(() => {
        resolve("Category has been removed successfully");
      })
      .catch(() => {
        reject(new AppError("Internal server error.", 500));
      });
  });
};

export const UpdateCategory = (id, data) => {
  return new Promise((resolve, reject) => {
    Category.findByIdAndUpdate(id, data)
      .then((category) => {
        resolve(category);
      })
      .catch(() => {
        reject(new AppError("Internal server error.", 500));
      });
  });
};
