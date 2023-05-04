import { Inventory } from "../models/index.js";
import AppError from "../utils/appError.js";

export const saveInventory = (inventoryData) => {
  return new Promise((resolve, reject) => {
    Inventory.create(inventoryData)
      .then((inventory) => {
        resolve(inventory);
      })
      .catch(() => {
        reject(new AppError("Internal server error.", 500));
      });
  });
};

export const getAllInventorys = () => {
  return new Promise((resolve, reject) => {
    Inventory.find()
      .select("-__v")
      .populate("productId", "_id name price description createdAt image")
      .populate("categoryId", "_id name")
      .populate("locationId", "_id name")
      .then((data) => {
        resolve(data);
      })
      .catch(() => {
        reject(new AppError("Internal server error.", 500));
      });
  });
};

export const getInventory = (data) => {
  return new Promise((resolve, reject) => {
    Inventory.findOne(data)
      .select("-__v")
      .populate("productId", "_id name price description createdAt image")
      .populate("categoryId", "_id name")
      .populate("locationId", "_id name")
      .then((inventory) => {
        resolve(inventory);
      })
      .catch(() => {
        reject(new AppError("Internal server error.", 500));
      });
  });
};

export const getProductsByLocationId = (locationId) => {
  return new Promise((resolve, reject) => {
    Inventory.find({ locationId })
      .select("-__v")
      .populate("productId", "_id name price description createdAt image")
      .then((inventorys) => {
        const products = inventorys.map((inventory) => inventory.productId);
        resolve(products);
      })
      .catch(() => {
        reject(new AppError("Internal server error.", 500));
      });
  });
};

export const getInventoryById = (id) => {
  return new Promise((resolve, reject) => {
    Inventory.findById(id)
      .select("-__v")
      .populate("productId", "_id name price description createdAt image")
      .populate("categoryId", "_id name")
      .populate("locationId", "_id name")
      .then((data) => {
        resolve(data);
      })
      .catch(() => {
        reject(new AppError("Internal server error.", 500));
      });
  });
};

export const RemoveInventory = (id) => {
  return new Promise((resolve, reject) => {
    Inventory.findByIdAndDelete(id)
      .then(() => {
        resolve("Inventory has been removed successfully");
      })
      .catch(() => {
        reject(new AppError("Internal server error.", 500));
      });
  });
};

export const UpdateInventory = (id, data) => {
  return new Promise((resolve, reject) => {
    Inventory.findByIdAndUpdate(id, data)
      .then((inventory) => {
        resolve(inventory);
      })
      .catch(() => {
        reject(new AppError("Internal server error.", 500));
      });
  });
};
