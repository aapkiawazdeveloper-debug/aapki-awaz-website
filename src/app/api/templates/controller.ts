import { success } from "@/app/core/utils/response";
import {
  getAllTemplate,
  getCategoryByDynamicTpl,
  getDynamicTemplateById,
} from "./service";
import { error } from "console";
import { Template } from "./types";

/**
 * GET: Retrieve all templates
 */
export const getTemplates = async () => {
  try {
    const templates: Template[] = await getAllTemplate();

    // const parseTemplates = templates.map((template) => {
    //   return {
    //     ...template,
    //     layout_data: JSON.parse(template.layout_data),
    //   };
    // });

    return success(
      {
        message: "Templates data retrieved successfully",
        templates: templates,
        // totalTemplates: templates.length,
      },
      200
    );
  } catch (err) {
    console.error("Failed to retrieve templates:", err);
    return error("Internal Server Error", 500);
  }
};

/**
 * GET: Retrieve template by dynamic_tpl
 */
export const getTemplateByDynamicTpl = async (id: number) => {
  try {
    const category = await getCategoryByDynamicTpl(String(id));

    if (!category) {
      return error("Category not found", 404);
    }

    return success(
      {
        message: "Category retrieved successfully",
        category,
      },
      200
    );
  } catch (err) {
    console.error("Failed to retrieve Category:", err);
    return error("Internal Server Error", 500);
  }
};
