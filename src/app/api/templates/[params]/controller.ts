import { getDynamicTemplateById } from "../service";
import { error, success } from "@/app/core/utils/response";

/**
 * Retrieve a category by dynamic tpl
 */
export const getTemplate = async (dynamic_tpl: number) => {
  try {
    if (!dynamic_tpl) {
      return error("dynamic_tpl is required", 400);
    }

    const template = await getDynamicTemplateById(dynamic_tpl);

    if (!template) {
      return error("Template not found", 404);
    }

    return success({
      message: "Template retrieved successfully",
      template,
    });
  } catch (err) {
    console.error("Eror in the get template:", err);
    return error("Internal server error", 500);
  }
};
