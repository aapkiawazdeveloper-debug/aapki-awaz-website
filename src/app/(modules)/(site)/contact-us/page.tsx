import CompanyDetails from "@/app/shared/components/site/CompanyDetails";
import InquiryForm from "@/app/shared/components/site/InquiryForm";
import PageHeader from "@/app/shared/components/site/ui/PageHeader";

const ContactUsPage = () => {
  return (
    <>
      <CompanyDetails />

      <PageHeader pageTitle="Inquiry Form" />

      <InquiryForm />
    </>
  );
};

export default ContactUsPage;
