import Pagination from "@/app/shared/components/site/Pagination";
import PoliticianCard from "@/app/shared/components/site/ui/cards/PoliticianCard";
import PoliticianFilter from "@/app/shared/components/site/ui/filters/PoliticianFilter";
import PageHeader from "@/app/shared/components/site/ui/PageHeader";

const buttons = [
  {
    id: 1,
    title: "View All",
    link: "/",
  },
];

const RajasthanZilaPramukhPage = () => {
  return (
    <>
      <PageHeader pageTitle="Member of Parliament - MP" buttons={buttons} />

      <PoliticianFilter />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3  gap-4">
        {Array(13)
          .fill(null)
          .map((_, index) => (
            <PoliticianCard key={index} />
          ))}
      </div>

      <Pagination />
    </>
  );
};

export default RajasthanZilaPramukhPage;