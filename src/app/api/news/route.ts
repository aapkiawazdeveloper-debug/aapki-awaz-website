import { getNews, getNewsByPagination } from "./controller";

/**
 * GET: Retrieve news (all or paginated)
 * Endpoint: /api/news?page=1&limit=20
 */
export const GET = async (req: Request) => {
  const url = new URL(req.url);
  const page = url.searchParams.get("page");
  const limit = url.searchParams.get("limit");

  if (page && limit) {
    const pageNumber = parseInt(page, 10);
    const limitNumber = parseInt(limit, 10);
    return getNewsByPagination(pageNumber, limitNumber);
  } else {
    return getNews();
  }
};
