import { getAllNews } from "./service";
import { error, success } from "@/app/core/utils/response";

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
