import { NewsDetailsResponse } from "../shared/types/news";
import api from "./api";

export const newsService = {
  // get news list
  getNewsList: async () => {
    const { data }: NewsDetailsResponse = await api.get("/news");
    return data;
  },

  // get news by id
  getNewsById: async (id: string | undefined) => {
    const { data } = await api.get(`/news/${id}`);
    return data;
  },
};
