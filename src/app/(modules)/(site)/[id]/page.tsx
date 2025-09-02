import GridSection from "@/app/shared/components/site/GridSection";
import Pagination from "@/app/shared/components/site/Pagination";
import PageFilter from "@/app/shared/components/site/ui/filters/PageFilter";
import PageHeader from "@/app/shared/components/site/ui/PageHeader";

const SiteCategoryDetails = () => {
  return (
    <>
      <PageHeader
        pageTitle="News / Events"
        buttons={[
          {
            id: 1,
            title: "View More",
            link: "/",
          },
        ]}
      />

      <PageFilter />

      <GridSection />

      <Pagination />
    </>
  );
};

export default SiteCategoryDetails;
