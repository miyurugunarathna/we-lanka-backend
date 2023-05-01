import {
  getCategory,
  saveCategory,
  getAllCategories,
  getCategoryById,
  RemoveCategory,
} from "../repository/index.js";
import AppError from "../utils/appError.js";

export const saveNewCategory = async (category) => {
  try {
    const existingCategory = await getCategory({ name: category?.name });
    if (existingCategory)
      throw new AppError(
        `Category with name ${category.name} already exists.`,
        400,
      );

    await saveCategory(category);
    return Promise.resolve("Category Created Successfully.");
  } catch (error) {
    throw new AppError(error.message, error.status);
  }
};

export const getCategoryList = async () => {
  try {
    const categories = await getAllCategories();
    return categories;
  } catch (error) {
    throw new AppError(error.message, error.status);
  }
};

export const updateCategory = async (id, data) => {
  try {
    const existingCategory = await getCategoryById(id);
    if (!existingCategory)
      throw new AppError(`Category with id ${id} not found.`, 404);

    existingCategory.set(data);
    await existingCategory.save();

    return Promise.resolve(`Category updated successfully.`);
  } catch (error) {
    throw new AppError(error.message, error.status);
  }
};

export const getCategoryUsingId = async (id) => {
  try {
    const existingCategory = await getCategoryById(id);
    if (!existingCategory)
      throw new AppError(`Category with id ${id} not found.`, 404);

    return Promise.resolve(existingCategory);
  } catch (error) {
    throw new AppError(error.message, error.status);
  }
};

export const deleteCategory = async (id) => {
  try {
    const existingCategory = await getCategoryById(id);
    if (!existingCategory)
      throw new AppError(`Category with id ${id} not found.`, 404);

    const res = await RemoveCategory(id);

    return Promise.resolve(res);
  } catch (error) {
    throw new AppError(error.message, error.status);
  }
};
