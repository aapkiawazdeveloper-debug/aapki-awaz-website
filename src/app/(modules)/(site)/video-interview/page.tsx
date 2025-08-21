import ArticleCard from "@/app/shared/components/site/ArticleCard";
import Pagination from "@/app/shared/components/site/Pagination";
import PageFilter from "@/app/shared/components/site/ui/PageFilter";
import PageHeader from "@/app/shared/components/site/ui/PageHeader";

const buttons = [
  {
    id: 1,
    title: "View More",
    link: "/",
  },
];

const VideoInterviewPage = () => {
  return (
    <>
      <PageHeader pageTitle="Video Interview" />

      <PageFilter />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
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

export default VideoInterviewPage;
