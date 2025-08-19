import CookiePolicy from "@/app/shared/components/site/CookiePolicy";
import PageHeader from "@/app/shared/components/site/ui/PageHeader";

const CookiePolicyPage = () => {
  return (
    <>
      <PageHeader pageTitle="Cookie Policy" />

      <CookiePolicy />
    </>
  );
};

export default CookiePolicyPage;
