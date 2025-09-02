import { createNewCategory, getCategories } from "./controller";

/**
 * GET: Retrieve all categories
 * Endpoint: /api/categories
 */
export const GET = async () => {
  return getCategories();
};

/**
 * POST: Create a new category
 * Endpoint: /api/categories
 */
export const POST = async (request: Request) => {
  return createNewCategory(request);
};
