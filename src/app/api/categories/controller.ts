import { error, success } from "@/app/core/utils/response";
import { createCategory, getAllCategories, getCategoryById } from "./service";
import { NextResponse } from "next/server";
import { CategoryData } from "@/app/shared/types/category";
import { convertNumericFlagToString } from "@/app/core/utils/numeric-flag-to-string";

/**
 * GET: Retrieve all categories
 */
export const getCategories = async () => {
  try {
    const categories = await getAllCategories();

    const categoriesList = await Promise.all(
      categories.map(async (category) => {
        const topMegaMenuColumn = Number(category.top_mega_menu_column) || 0;

        type TopMegaCols =
          | "topmenu_mega_col1"
          | "topmenu_mega_col2"
          | "topmenu_mega_col3"
          | "topmenu_mega_col4"
          | "topmenu_mega_col5"
          | "topmenu_mega_col6";

        const childColumns: Record<string, CategoryData[]> = {};

        for (let i = 1; i <= 6; i++) {
          const key = `topmenu_mega_col${i}` as TopMegaCols;
          const colIds = category[key]
            ? category[key].split(",").map((id: string) => Number(id.trim()))
            : [];

          if (i <= topMegaMenuColumn) {
            const children = await Promise.all(
              colIds.map(async (id) => {
                const cat = await getCategoryById(id);
                return cat ? convertNumericFlagToString(cat) : null;
              })
            );
            childColumns[key] = children.filter(Boolean) as CategoryData[];
          } else {
            childColumns[key] = [];
          }
        }

        return {
          ...convertNumericFlagToString(category),
          childColumns,
        };
      })
    );

    return success(
      {
        message: "Category data retrieved successfully",
        categories: categoriesList,
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

    // Ensure empty columns are stored as empty string
    for (let i = 1; i <= 6; i++) {
      const key = `topmenu_mega_col${i}` as TopMegaCols;
      const value = category[key];

      if (!value || value === "") {
        category[key] = ""; // store empty string, not null or undefined
        continue;
      }

      // Split, trim, filter invalid IDs
      const ids = value
        .split(",")
        .map((id) => Number(id.trim()))
        .filter((id) => !isNaN(id));

      // Keep only topMegaMenuColumn IDs per business rule
      category[key] = ids.slice(0, topMegaMenuColumn).join(",");
    }

    // Insert into DB
    const columns = Object.keys(category);
    const values = Object.values(category);
    const newCategoryId = await createCategory(columns, values);

    // Fetch child categories for each column dynamically
    const childColumns: Record<string, any[]> = {};

    for (let i = 1; i <= topMegaMenuColumn; i++) {
      const key = `topmenu_mega_col${i}` as TopMegaCols;
      const colIds = category[key]?.split(",").map(Number) || [];
      const children = await Promise.all(
        colIds.map((id) => getCategoryById(id))
      );
      childColumns[key] = children.filter(Boolean); // remove nulls if any
    }

    return success(
      {
        message: "Category created successfully.",
        categoryId: newCategoryId,
        childColumns, // this contains full category data for each column
      },
      201
    );
  } catch (err) {
    console.error("Failed to create category:", err);
    return error("Internal Server Error", 500);
  }
};
