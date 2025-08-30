import { error, success } from "@/app/core/utils/response";
import { createCategory, getAllCategories, getCategoryById } from "./service";
import { NextResponse } from "next/server";
import { CategoryData } from "@/app/shared/types/category";

/**
 * GET: Retrieve all categories
 */
export const getCategories = async () => {
  try {
    const categories = await getAllCategories();

    const categoryList = await Promise.all(
      categories.map(async (category) => {
        const topMegaMenuColumn = Number(category.top_mega_menu_column) || 0;

        if (topMegaMenuColumn >= 1 && topMegaMenuColumn <= 6) {
          type TopMegaCols =
            | "topmenu_mega_col1"
            | "topmenu_mega_col2"
            | "topmenu_mega_col3"
            | "topmenu_mega_col4"
            | "topmenu_mega_col5"
            | "topmenu_mega_col6";

          const childColumns: Record<string, any[]> = {};

          for (let i = 1; i <= topMegaMenuColumn; i++) {
            const key = `topmenu_mega_col${i}` as TopMegaCols;
            const colIds =
              category[key]
                ?.split(",")
                .map((id: string) => Number(id.trim())) || [];

            const children = await Promise.all(
              colIds.map((id) => getCategoryById(id))
            );
            childColumns[key] = children.filter(Boolean);
          }

          return {
            ...category,
            childColumns,
          };
        }

        return category;
      })
    );

    return success(
      {
        message: "Category data retrieved successfully",
        categories: categoryList,
      },
      200
    );
  } catch (err) {
    console.error("Failed to retrieve categories:", err);
    return error("Internal Server Error", 500);
  }
};

/**
 * POST: Create a new category
 */
export const createNewCategory = async (request: Request) => {
  try {
    const category: CategoryData = await request.json();

    if (!category || Object.keys(category).length === 0) {
      return NextResponse.json(
        { message: "Bad Request: Missing or empty request body." },
        { status: 400 }
      );
    }

    const topMegaMenuColumn = Number(category.top_mega_menu_column) || 0;

    if (topMegaMenuColumn < 0 || topMegaMenuColumn > 6) {
      return NextResponse.json(
        { message: "Invalid top_mega_menu_column: must be between 1 and 6." },
        { status: 400 }
      );
    }

    type TopMegaCols =
      | "topmenu_mega_col1"
      | "topmenu_mega_col2"
      | "topmenu_mega_col3"
      | "topmenu_mega_col4"
      | "topmenu_mega_col5"
      | "topmenu_mega_col6";

    for (let i = 1; i <= 6; i++) {
      const key = `topmenu_mega_col${i}` as TopMegaCols;
      const value = category[key];

      if (!value || value === "") {
        category[key] = "";
        continue;
      }

      const ids = value
        .split(",")
        .map((id) => Number(id.trim()))
        .filter((id) => !isNaN(id));

      category[key] = ids.slice(0, topMegaMenuColumn).join(",");
    }

    const columns = Object.keys(category);
    const values = Object.values(category);
    const newCategoryId = await createCategory(columns, values);

    const childColumns: Record<string, any[]> = {};

    for (let i = 1; i <= topMegaMenuColumn; i++) {
      const key = `topmenu_mega_col${i}` as TopMegaCols;
      const colIds = category[key]?.split(",").map(Number) || [];
      const children = await Promise.all(
        colIds.map((id) => getCategoryById(id))
      );
      childColumns[key] = children.filter(Boolean);
    }

    return success(
      {
        message: "Category created successfully.",
        categoryId: newCategoryId,
        childColumns,
      },
      201
    );
  } catch (err) {
    console.error("Failed to create category:", err);
    return error("Internal Server Error", 500);
  }
};
