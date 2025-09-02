import { getNews } from "./controller";

/**
 * GET: Retrieve all categories
 * Endpoint: /api/categories
 */

export const GET = async () => {
  return getNews();
};
