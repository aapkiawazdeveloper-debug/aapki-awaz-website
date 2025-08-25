import BollywoodUserRegistrationForm from "@/app/shared/components/site/BollywoodUserRegistrationForm";
import BreadCrumb from "@/app/shared/components/site/ui/hero/BreadCrumb";
import PageHeader from "@/app/shared/components/site/ui/PageHeader";
import Link from "next/link";

const BollywoodRegistrationPage = () => {
  return (
    <>
      <PageHeader pageTitle="Bollywood User - Registration Form" />
      <BreadCrumb
        mode="bollywood"
        items={[
          { label: "Add / Update Yourself" },
          { label: "Services" },
          { label: "Products" },
          {
            label: "Business in Bollywood Directory",
            href: "/entertainment/bollywood-directory",
          },
        ]}
      />

      <p className="mt-2 text-sm">
        If you also want to add / submit / update your listing, kindly fill up
        the given form or send us an e-mail regarding the{" "}
        <Link
          href="/entertainment/bollywood-directory"
          className="text-blue-400 font-medium"
        >
          Bollywood Directory Registration
        </Link>{" "}
        at{" "}
        <Link
          href="mailto:info@aapkiawaz.in"
          className="text-blue-400 font-medium"
          target="_blank"
          rel="noopener noreferrer"
        >
          info@aapkiawaz.in
        </Link>{" "}
        and our team will publish it for you.
      </p>

      <BollywoodUserRegistrationForm />
    </>
  );
};

export default BollywoodRegistrationPage;
