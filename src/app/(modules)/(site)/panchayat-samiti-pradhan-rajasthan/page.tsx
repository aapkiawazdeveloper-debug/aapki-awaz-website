import Pagination from "@/app/shared/components/site/Pagination";
import PageFilter from "@/app/shared/components/site/ui/PageFilter";
import PageHeader from "@/app/shared/components/site/ui/PageHeader";
import PoliticianCard from "@/app/shared/components/site/ui/card/PoliticianCard";

const buttons = [
  {
    id: 1,
    title: "View All",
    link: "/",
  },
];

const PanchayatSamitiPradhanRajasthanPage = () => {
  return (
    <>
      <PageHeader pageTitle="Panchayat Samiti - Pradhan" buttons={buttons} />

      <PageFilter />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
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

export default PanchayatSamitiPradhanRajasthanPage;
