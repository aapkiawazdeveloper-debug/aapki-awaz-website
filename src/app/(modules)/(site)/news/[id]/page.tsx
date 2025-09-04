"use client";

import { newsService } from "@/app/services/newsService";
import PowredBy from "@/app/shared/components/site/PowredBy";
import NewsDetails from "@/app/shared/components/site/ui/details/NewsDetails";
import Hero from "@/app/shared/components/site/ui/hero/Hero";
import { NewsData } from "@/app/shared/types/news";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const NewsDetailsPage = () => {
  const params = useParams();
  const newsId = Array.isArray(params.id) ? params.id[0] : params.id;
  const [news, setNews] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  const [title, setTitle] = useState<string>("");
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!newsId) return;
    fetchNews();
  }, [newsId]);

  //
  const fetchNews = async () => {
    try {
      const response: NewsData = await newsService.getNewsById(newsId);

      if (response?.success && response.news) {
        setNews(response.news);
        setError(null);
      } else {
        setNews(null);
        setError(response?.message || "No news found");
        console.warn("API returned failure:", response?.message);
      }
    } catch (error: any) {
      console.error("Error fetching news:", error.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <p>Loading news...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <>
      <Hero title={news?.news_name || "News Details"} />
      {news && <NewsDetails news={news} />}
      <PowredBy />
    </>
  );
};

export default NewsDetailsPage;
