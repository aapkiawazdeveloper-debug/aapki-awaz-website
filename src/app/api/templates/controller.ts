import { success } from "@/app/core/utils/response";
import { getAllTemplate } from "./service";
import { error } from "console";

/**
 * GET: Retrieve all templates
 */
export const getTemplates = async () => {
  try {
    const templates = await getAllTemplate();

    return success(
      {
        message: "Templates data retrieved successfully",
        templates,
      },
      200
    );
  } catch (err) {
    console.error("Failed to retrieve templates:", err);
    return error("Internal Server Error", 500);
  }
};
