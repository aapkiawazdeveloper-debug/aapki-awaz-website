"use client";

import { useEffect, useState } from "react";
import ArticleCard from "./ui/cards/ArticleCard";
import axios from "axios";
import { NewsResponse } from "../../types/news";
import { News } from "@/app/api/news/types";

const GridSection = () => {
  const [newsList, setNewsList] = useState<News[]>([]);
  const [isLoader, setIsLoader] = useState<boolean>(false);

  useEffect(() => {
    getNewsList();
  }, []);

  // get news list
  const getNewsList = async () => {
    setIsLoader(true);
    try {
      const response: NewsResponse = await axios.get("/api/news");
      if (response.data.success) {
        console.log("news list ", response.data.newsList);
        setNewsList(response.data.newsList);
      }
    } catch (error: any) {
      setNewsList([]);
      console.log("error message ", error.message ?? "Something went wrong!");
    } finally {
      setIsLoader(false);
    }
  };

  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {isLoader ? (
          <p>Loading...</p>
        ) : (
          <>
            {newsList.map((news: News) => (
              <ArticleCard key={news.id} newsData={news} />
            ))}
          </>
        )}
      </div>
    </section>
  );
};

export default GridSection;
