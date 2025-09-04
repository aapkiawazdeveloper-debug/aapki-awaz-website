import { getNews } from "./controller";

/**
 * GET: Retrieve a news by ID or system_short_url
 * Endpoint: /api/news/[param]
 * - If param is a number, fetch by ID
 * - If param is a string, fetch by system_short_url
 */
export const GET = async (
  request: Request,
  { params }: { params: { params: string } }
) => {
  return getNews(params.params);
};
