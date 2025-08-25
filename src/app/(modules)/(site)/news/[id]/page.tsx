import PowredBy from "@/app/shared/components/site/PowredBy";
import NewsDetails from "@/app/shared/components/site/ui/details/NewsDetails";
import Hero from "@/app/shared/components/site/ui/hero/Hero";

const NewsDetailsPage = () => {
  return (
    <>
      <Hero title="वोट चोरी के आरोपों को लेकर चुनाव आयोग" />
      <NewsDetails />
      <PowredBy />
    </>
  );
};

export default NewsDetailsPage;
