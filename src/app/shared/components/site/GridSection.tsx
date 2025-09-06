"use client";

import { useEffect, useState } from "react";
import ArticleCard from "./ui/cards/ArticleCard";
import axios from "axios";
import { NewsResponse } from "../../types/news";
import { News } from "@/app/api/news/types";
import Pagination from "./Pagination";
import { getGridClass } from "../../lib/GetGridClass";

const GridSection: React.FC<{ dataColumn: string }> = ({ dataColumn }) => {
  const [newsList, setNewsList] = useState<News[]>([]);
  const [isLoader, setIsLoader] = useState<boolean>(false);

  // pagination state
  const [page, setPage] = useState<number>(1);
  const [limit] = useState<number>(20);
  const [totalPages, setTotalPages] = useState<number>(1);

  const gridClass = getGridClass(dataColumn);

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
      <div className={`grid gap-4 ${gridClass}`}>
        {isLoader ? (
          <p>Loading news...</p>
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
