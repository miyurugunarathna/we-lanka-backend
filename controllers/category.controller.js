import {
  saveNewCategory,
  getCategoryList,
  updateCategory,
  getCategoryUsingId,
  deleteCategory,
} from "../services/index.js";
import Success from "../utils/success.js";

export const saveCategory = async (req, res) => {
  try {
    const category = await saveNewCategory(req.body);
    res.json(Success(category, "Category Created Successfully."));
  } catch (err) {
    res.status(err.status).json(err.message);
  }
};

export const getAllCategories = async (req, res) => {
  try {
    const categories = await getCategoryList();
    res.json(Success(categories));
  } catch (err) {
    res.status(err.status).json(err.message);
  }
};

export const updateCategoryData = async (req, res) => {
  try {
    const updatedCategory = await updateCategory(req.params.id, req.body);
    res.json(
      Success(updatedCategory, "Category has been updated Successfully."),
    );
  } catch (err) {
    res.status(err.status).json(err.message);
  }
};

export const getCategoryById = async (req, res) => {
  try {
    const category = await getCategoryUsingId(req.params.id);
    res.json(Success(category));
  } catch (err) {
    res.status(err.status).json(err.message);
  }
};

export const removeCategory = async (req, res) => {
  try {
    const category = await deleteCategory(req.params.id);
    res.json(Success(category));
  } catch (err) {
    res.status(err.status).json(err.message);
  }
};
