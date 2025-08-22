import CelebrityCard from "@/app/shared/components/site/ui/cards/CelebrityCard";
import PoliticianFilter from "@/app/shared/components/site/ui/filters/PoliticianFilter";
import PageHeader from "@/app/shared/components/site/ui/PageHeader";

const BollywoodDirectoryPage = () => {
  return (
    <>
      <PageHeader pageTitle="Bollywood Directory - Bollywood Listing" />
      <PoliticianFilter />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {Array(13)
          .fill(null)
          .map((_, index) => (
            <CelebrityCard key={index} />
          ))}
      </div>
    </>
  );
};

export default BollywoodDirectoryPage;
