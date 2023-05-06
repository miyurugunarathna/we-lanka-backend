import {
  saveNewLocation,
  getLocationList,
  updateLocation,
  getLocationUsingId,
  deleteLocation,
  getLocationsUsingCategoryId,
} from "../services/index.js";
import Success from "../utils/success.js";

export const saveLocation = async (req, res) => {
  try {
    const location = await saveNewLocation(req.body);
    res.json(Success(location, "Location Created Successfully."));
  } catch (err) {
    res.status(err.status).json(err.message);
  }
};

export const getAllLocations = async (req, res) => {
  try {
    const locations = await getLocationList();
    res.json(Success(locations));
  } catch (err) {
    res.status(err.status).json(err.message);
  }
};

export const updateLocationData = async (req, res) => {
  try {
    const updatedLocation = await updateLocation(req.params.id, req.body);
    res.json(
      Success(updatedLocation, "Location has been updated Successfully."),
    );
  } catch (err) {
    res.status(err.status).json(err.message);
  }
};

export const getLocationById = async (req, res) => {
  try {
    const location = await getLocationUsingId(req.params.id);
    res.json(Success(location));
  } catch (err) {
    res.status(err.status).json(err.message);
  }
};

export const getLocationsByCategoryId = async (req, res) => {
  try {
    const locations = await getLocationsUsingCategoryId(req.params.id);
    res.json(Success(locations));
  } catch (err) {
    res.status(err.status).json(err.message);
  }
};

export const removeLocation = async (req, res) => {
  try {
    const location = await deleteLocation(req.params.id);
    res.json(Success(location));
  } catch (err) {
    res.status(err.status).json(err.message);
  }
};
