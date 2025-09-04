import { getCategoryByDynamicTpl } from "../service";
import { error, success } from "@/app/core/utils/response";

/**
 * Retrieve a category by dynamic tpl
 */
export const getCategory = async (dynamic_tpl: string) => {
  try {
    if (!dynamic_tpl) {
      return error("dynamic_tpl is required", 400);
    }

    const category = await getCategoryByDynamicTpl(dynamic_tpl);

    if (!category) {
      return error("Category not found", 404);
    }

    return success({
      message: "Category retrieved successfully",
      category,
    });
  } catch (err) {
    console.error("Eror in the get category:", err);
    return error("Internal server error", 500);
  }
};
