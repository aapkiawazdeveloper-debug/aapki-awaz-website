import { NextRequest } from "next/server";
import { deleteCategory, getCategory, updateCategory } from "./controller";
import { error } from "@/app/core/utils/response";

/**
 * GET: Retrieve a category by ID or system_short_url
 * Endpoint: /api/categories/[param]
 * - If param is a number, fetch by ID
 * - If param is a string, fetch by system_short_url
 */
export const GET = async (
  request: NextRequest,
  { params }: { params: { param: string } }
) => {
  try {
    const { param } = params;
    const { status, body } = await getCategory(param);
    return new Response(JSON.stringify(body), { status });
  } catch (err) {
    console.error("Failed to retrieve category:", err);
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
  request: NextRequest,
  { params }: { params: { param: string } }
) => {
  try {
    const { param } = params;
    const { status, body } = await deleteCategory(param);
    return new Response(JSON.stringify(body), { status });
  } catch (err) {
    console.error("Failed to delete category:", err);
    return new Response(JSON.stringify({ message: "Internal Server Error" }), {
      status: 500,
    });
  }
};

/**
 * PUT: Update a category by ID
 * Endpoint: /api/categories/[param]
 * - Only numeric IDs are allowed for updates
 * - Returns 400 if param is not a number
 */
export const PUT = async (
  request: NextRequest,
  { params }: { params: { param: string } }
) => {
  try {
    const { param } = params;
    const data = await request.json();
    const { status, body } = await updateCategory(param, data);
    return new Response(JSON.stringify(body), { status });
  } catch (err) {
    console.error("Failed to update category:", err);
    return new Response(JSON.stringify({ message: "Internal Server Error" }), {
      status: 500,
    });
  }
};
