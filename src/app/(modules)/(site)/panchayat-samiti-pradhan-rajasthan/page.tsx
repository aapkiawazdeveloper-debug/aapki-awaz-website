import Pagination from "@/app/shared/components/site/Pagination";
import PageHeader from "@/app/shared/components/site/ui/PageHeader";
import PoliticianCard from "@/app/shared/components/site/ui/cards/PoliticianCard";
import PoliticianFilter from "@/app/shared/components/site/ui/filters/PoliticianFilter";

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

      <PoliticianFilter />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
