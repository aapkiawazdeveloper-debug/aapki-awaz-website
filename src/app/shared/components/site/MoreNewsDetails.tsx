import React from "react";
import PageHeader from "./ui/PageHeader";
import PageFilter from "./ui/filters/PageFilter";
import ArticleCard from "./ui/cards/ArticleCard";

const MoreNewsDetails = () => {
  return (
    <>
      <PageHeader pageTitle="Jaipur News - " />
      <PageFilter />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {Array(13)
          .fill(null)
          .map((_, index) => (
            <ArticleCard key={index} isSocialMedia={true} />
          ))}
      </div>
    </>
  );
};

export default MoreNewsDetails;
