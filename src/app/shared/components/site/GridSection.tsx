"use client";

import { useEffect, useState } from "react";
import ArticleCard from "./ui/cards/ArticleCard";
import axios from "axios";
import { NewsResponse } from "../../types/news";
import { News } from "@/app/api/news/types";
import Pagination from "./Pagination";

const GridSection = () => {
  const [newsList, setNewsList] = useState<News[]>([]);
  const [isLoader, setIsLoader] = useState<boolean>(false);

  // pagination state
  const [page, setPage] = useState<number>(1);
  const [limit] = useState<number>(20);
  const [totalPages, setTotalPages] = useState<number>(1);

  useEffect(() => {
    getNewsList(page, limit);
  }, [page]);

  // get news list
  const getNewsList = async (page: number, limit: number) => {
    setIsLoader(true);
    try {
      const response: NewsResponse = await axios.get(
        `/api/news?page=${page}&limit=${limit}`
      );

      if (response.data.success) {
        setNewsList(response.data.newsList);
        setTotalPages(response.data.pagination?.totalItems ?? 1);
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

      {/* Pagination */}
      <Pagination
        currentPage={page}
        totalPages={totalPages}
        onPageChange={(newPage) => setPage(newPage)}
      />
    </section>
  );
};

export default GridSection;
