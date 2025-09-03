import { getAllNews, getPaginatedNews } from "./service";
import { error, success } from "@/app/core/utils/response";
import { News } from "./types";

/**
 * Retrieve all news items.
 *
 * Calls the service to fetch all news that are not deleted.
 *
 * @returns {Promise<object>} A response object containing a success message and the list of all news, or an error.
 */
export const getNews = async () => {
  try {
    const newsList = await getAllNews();

    return success(
      {
        message: "News data retrieved successfully",
        newsList,
      },
      200
    );
  } catch (err) {
    console.error("Failed to retrieve news:", err);
    return error("Internal Server Error", 500);
  }
};

/**
 * Retrieve paginated news items.
 *
 * Calls the service to fetch news for a specific page with a limit per page.
 *
 * @param {number} page - The page number to retrieve (1-based).
 * @param {number} limit - The number of news items per page.
 * @returns {Promise<object>} A response object containing a success message, the list of paginated news, and pagination info, or an error.
 */
export const getNewsByPagination = async (page: number, limit: number) => {
  try {
    const newsList: News[] = await getPaginatedNews(page, limit);
    return success(
      {
        message: "Paginated news retrieved successfully",
        newsList,
        pagination: {
          currentPage: page,
          limit,
          totalItems: newsList.length,
        },
      },
      200
    );
  } catch (err) {
    console.error("Failed to retrieve paginated news:", err);
    return error("Internal Server Error", 500);
  }
};
