"use client";

import { useEffect } from "react";
import ArticleCard from "./ui/cards/ArticleCard";
import axios from "axios";

const GridSection = () => {
  useEffect(() => {
    getNewsList();
  }, []);

  // get news list
  const getNewsList = async () => {
    try {
      const response: any = await axios.get("/api/categories");
      console.log("news list ", response.data);
    } catch (error) {
      console.log("error ", error);
    }
  };

  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {Array(13)
          .fill(null)
          .map((_, index) => (
            <ArticleCard key={index} />
          ))}
      </div>
    </section>
  );
};

export default GridSection;
