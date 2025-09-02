import {
  getCategoryById,
  getCategoryBySystemShortUrl,
  deleteCategoryById,
  updateCategoryById,
  getCategoryByShortUrl,
  getCategoryByslug,
} from "@/app/api/categories/service";
import { success, error } from "@/app/core/utils/response";

/**
 * Retrieve a category by ID or system_short_url
 */
export const getCategory = async (param: string) => {
  let category = null;

  // get category by id
  if (!isNaN(Number(param))) {
    category = await getCategoryById(Number(param));
  }

  // get category by the system short url
  if (!category) {
    category = await getCategoryByShortUrl(param);
  }

  // get category by system short url
  if (!category) {
    category = await getCategoryBySystemShortUrl(param);
  }

  // get category by slug
  if (!category) {
    category = await getCategoryByslug(param);
  }

  if (!category) return { status: 404, body: error("Category not found", 404) };

  return {
    status: 200,
    body: success({ message: "Category retrieved successfully", category }),
  };
};

/**
 * Delete a category by ID
 */
export const deleteCategory = async (param: string) => {
  if (isNaN(Number(param)))
    return {
      status: 400,
      body: error("Cannot delete by system_short_url", 400),
    };

  const deleted = await deleteCategoryById(Number(param));
  if (!deleted) return { status: 404, body: error("Category not found", 404) };

  return {
    status: 200,
    body: success({ message: "Category deleted successfully" }),
  };
};

/**
 * Update a category by ID
 */
export const updateCategory = async (param: string, data: any) => {
  if (isNaN(Number(param)))
    return {
      status: 400,
      body: error("Cannot update by system_short_url", 400),
    };

  const updated = await updateCategoryById(Number(param), data);
  if (!updated)
    return {
      status: 404,
      body: error("Category not found or nothing to update", 404),
    };

  return {
    status: 200,
    body: success({ message: "Category updated successfully" }),
  };
};
