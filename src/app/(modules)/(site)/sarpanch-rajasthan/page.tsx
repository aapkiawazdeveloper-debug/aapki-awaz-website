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

const SarpanchRajasthanPage = () => {
  return (
    <>
      <PageHeader pageTitle="Sarpanch Rajasthan" buttons={buttons} />

      <PoliticianFilter />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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

export default SarpanchRajasthanPage;
