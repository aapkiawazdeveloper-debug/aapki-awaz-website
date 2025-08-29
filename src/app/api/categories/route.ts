import { NextResponse } from "next/server";
import { createCategory, getAllCategories } from "./service";
import { error, success } from "@/app/core/utils/response";

/**
 * GET: Retrieve all categories
 * Endpoint: /api/categories
 */
export const GET = async () => {
  try {
    const categories = await getAllCategories();
    return success(
      {
        message: "Category data retrieved successfully",
        categories,
      },
      200
    );
  } catch (err) {
    console.error("Failed to retrieve categories:", err);
    // Use the shared error response
    return error("Internal Server Error", 500);
  }
};

/**
 * POST: Create a new category
 * Endpoint: /api/categories
 */
export const POST = async (request: Request) => {
  try {
    const category_data = await request.json();

    if (!category_data || Object.keys(category_data).length === 0) {
      return NextResponse.json(
        { message: "Bad Request: Missing or empty request body." },
        { status: 400 }
      );
    }

    const columns = Object.keys(category_data);
    const values = Object.values(category_data);

    await createCategory(columns, values);

    return success({ message: "Category created successfully." }, 201);
  } catch (err) {
    console.error("Failed to create category:", err);
    return error("Internal Server Error", 500);
  }
};
