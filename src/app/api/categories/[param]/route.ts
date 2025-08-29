import {
  getCategoryById,
  getCategoryBySystemShortUrl,
  deleteCategoryById,
  updateCategoryById,
} from "@/app/api/categories/service";
import { error } from "console";
import { success } from "@/app/core/utils/response";

/**
 * GET: Retrieve a category by ID or system_short_url
 * Endpoint: /api/categories/[param]
 * - If param is a number, fetch by ID
 * - If param is a string, fetch by system_short_url
 */
export const GET = async (
  request: Request,
  { params }: { params: { param: string } }
) => {
  try {
    const { param } = params;
    const isId = !isNaN(Number(param));

    const category = isId
      ? await getCategoryById(Number(param))
      : await getCategoryBySystemShortUrl(param);

    if (!category) return error("Category not found", 404);

    return success({ message: "Category retrieved successfully", category });
  } catch (err) {
    console.error("Failed to retrieved category:", err);
    return error("Internal Server Error", 500);
  }
};

/**
 * DELETE: Delete a category by ID
 * Endpoint: /api/categories/[param]
 * - Only numeric IDs are allowed for deletion
 * - Returns 400 if param is not a number
 */
export const DELETE = async (
  request: Request,
  { params }: { params: { param: string } }
) => {
  try {
    const { param } = params;

    if (isNaN(Number(param)))
      return error("Cannot delete by system_short_url", 400);

    const deleted = await deleteCategoryById(Number(param));
    if (!deleted) return error("Category not found", 404);

    return success({ message: "Category deleted successfully" });
  } catch (err) {
    console.error("Failed to delete category:", err);
    return error("Internal Server Error", 500);
  }
};

/**
 * PUT: Update a category by ID
 * Endpoint: /api/categories/[param]
 * - Only numeric IDs are allowed for updates
 * - Returns 400 if param is not a number
 */
export const PUT = async (
  request: Request,
  { params }: { params: { param: string } }
) => {
  try {
    const { param } = params;

    if (isNaN(Number(param)))
      return error("Cannot update by system_short_url", 400);

    const data = await request.json();
    const updated = await updateCategoryById(Number(param), data);

    if (!updated) return error("Category not found or nothing to update", 404);

    return success({ message: "Category updated successfully" });
  } catch (err) {
    console.error("Failed to update category:", err);
    return error("Internal Server Error", 500);
  }
};
