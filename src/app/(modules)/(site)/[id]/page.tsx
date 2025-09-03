"use client";

import { templateService } from "@/app/services/templateService";
import GridSection from "@/app/shared/components/site/GridSection";
import Pagination from "@/app/shared/components/site/Pagination";
import PageFilter from "@/app/shared/components/site/ui/filters/PageFilter";
import PageHeader from "@/app/shared/components/site/ui/PageHeader";
import { Template, TemplateResponse } from "@/app/shared/types/template";
import { useEffect, useState } from "react";

const SiteCategoryDetails = () => {
  const [templates, setTemplates] = useState<Template[]>([]);

  useEffect(() => {
    getTemplates();
  }, []);

  // get templates
  const getTemplates = async () => {
    try {
      const response: TemplateResponse = await templateService.getTemplates();

      setTemplates(response.data.templates);

      console.log(response.data.templates);
    } catch (error) {}
  };

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
