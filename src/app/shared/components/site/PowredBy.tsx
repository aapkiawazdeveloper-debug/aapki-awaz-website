import ArticleCard from "./ui/cards/ArticleCard";
import PageFilter from "./ui/filters/PageFilter";
import InnerHeader from "./ui/InnerHeader";

const PowredBy = () => {
  return (
    <>
      <InnerHeader title="Powered by / Sponsored by" />
      <PageFilter />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {Array(13)
          .fill(null)
          .map((_, index) => (
            <ArticleCard key={index} isSocialMedia={true} />
          ))}
      </div>
    </>
  );
};

export default PowredBy;
