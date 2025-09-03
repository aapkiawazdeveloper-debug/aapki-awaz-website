import { success } from "@/app/core/utils/response";
import { getAllTemplate } from "./service";
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
        totalTemplates: templates.length,
      },
      200
    );
  } catch (err) {
    console.error("Failed to retrieve templates:", err);
    return error("Internal Server Error", 500);
  }
};
