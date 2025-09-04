import { error, success } from "@/app/core/utils/response";
import { getNewsBySystemShortUrl } from "../service";

/**
 * Retrieve a news by ID or system_short_url
 */
export const getNews = async (param: string) => {
  try {
    let news = null;

    // get category by system short url
    if (!news) {
      news = await getNewsBySystemShortUrl(param);
    }

    if (!news) return error("News not found", 500);

    return success({ message: "News retrieved successfully", news });
  } catch (err: any) {
    console.error("Failed to retrieve news:", err.message);
    return error(err.message, 500);
  }
};
