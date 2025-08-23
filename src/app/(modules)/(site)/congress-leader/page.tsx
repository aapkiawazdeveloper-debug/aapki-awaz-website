import Pagination from "@/app/shared/components/site/Pagination";
import ArticleCard from "@/app/shared/components/site/ui/cards/ArticleCard";
import PageFilter from "@/app/shared/components/site/ui/filters/PageFilter";
import PageHeader from "@/app/shared/components/site/ui/PageHeader";

const CongressLeaderPage = () => {
  return (
    <>
      <PageHeader pageTitle="Congress Leader" />

      <PageFilter />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {Array(13)
          .fill(null)
          .map((_, index) => (
            <ArticleCard key={index} />
          ))}
      </div>

      <Pagination />
    </>
  );
};

export default CongressLeaderPage;
