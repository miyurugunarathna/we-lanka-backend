import {
  getLocation,
  saveLocation,
  getAllLocations,
  getLocationById,
  RemoveLocation,
  getLocationsByCategoryId,
} from "../repository/index.js";
import AppError from "../utils/appError.js";

export const saveNewLocation = async (location) => {
  try {
    const existingLocation = await getLocation({ name: location?.name });
    if (existingLocation)
      throw new AppError(
        `Location with name ${location.name} already exists.`,
        400,
      );

    await saveLocation(location);
    return Promise.resolve("Location Created Successfully.");
  } catch (error) {
    throw new AppError(error.message, error.status);
  }
};

export const getLocationList = async () => {
  try {
    const locations = await getAllLocations();
    return locations;
  } catch (error) {
    throw new AppError(error.message, error.status);
  }
};

export const updateLocation = async (id, data) => {
  try {
    const existingLocation = await getLocationById(id);
    if (!existingLocation)
      throw new AppError(`Location with id ${id} not found.`, 404);

    existingLocation.set(data);
    await existingLocation.save();

    return Promise.resolve(`Location updated successfully.`);
  } catch (error) {
    throw new AppError(error.message, error.status);
  }
};

export const getLocationUsingId = async (id) => {
  try {
    const existingLocation = await getLocationById(id);
    if (!existingLocation)
      throw new AppError(`Location with id ${id} not found.`, 404);

    return Promise.resolve(existingLocation);
  } catch (error) {
    throw new AppError(error.message, error.status);
  }
};

export const getLocationsUsingCategoryId = async (categoryId) => {
  try {
    const locations = await getLocationsByCategoryId(categoryId);
    return Promise.resolve(locations);
  } catch (error) {
    throw new AppError(error.message, error.status);
  }
};


export const deleteLocation = async (id) => {
  try {
    const existingLocation = await getLocationById(id);
    if (!existingLocation)
      throw new AppError(`Location with id ${id} not found.`, 404);

    const res = await RemoveLocation(id);

    return Promise.resolve(res);
  } catch (error) {
    throw new AppError(error.message, error.status);
  }
};
