import { Location } from "../models/index.js";
import AppError from "../utils/appError.js";

export const saveLocation = (locationData) => {
  return new Promise((resolve, reject) => {
    Location.create(locationData)
      .then((location) => {
        resolve(location);
      })
      .catch(() => {
        reject(new AppError("Internal server error.", 500));
      });
  });
};

export const getAllLocations = () => {
  return new Promise((resolve, reject) => {
    Location.find()
      .select("_id name")
      .then((data) => {
        resolve(data);
      })
      .catch(() => {
        reject(new AppError("Internal server error.", 500));
      });
  });
};

export const getLocation = (data) => {
  return new Promise((resolve, reject) => {
    Location.findOne(data)
      .select("_id name")
      .then((location) => {
        resolve(location);
      })
      .catch(() => {
        reject(new AppError("Internal server error.", 500));
      });
  });
};

export const getLocationById = (id) => {
  return new Promise((resolve, reject) => {
    Location.findById(id)
      .select("_id name")
      .then((data) => {
        resolve(data);
      })
      .catch(() => {
        reject(new AppError("Internal server error.", 500));
      });
  });
};

export const RemoveLocation = (id) => {
  return new Promise((resolve, reject) => {
    Location.findByIdAndDelete(id)
      .then(() => {
        resolve("Location has been removed successfully");
      })
      .catch(() => {
        reject(new AppError("Internal server error.", 500));
      });
  });
};

export const UpdateLocation = (id, data) => {
  return new Promise((resolve, reject) => {
    Location.findByIdAndUpdate(id, data)
      .then((location) => {
        resolve(location);
      })
      .catch(() => {
        reject(new AppError("Internal server error.", 500));
      });
  });
};
