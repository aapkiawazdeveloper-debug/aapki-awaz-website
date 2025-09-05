"use client";

import { categoryService } from "@/app/services/categoryService";
import { templateService } from "@/app/services/templateService";
import GridSection from "@/app/shared/components/site/GridSection";
import Pagination from "@/app/shared/components/site/Pagination";
import PageFilter from "@/app/shared/components/site/ui/filters/PageFilter";
import PageHeader from "@/app/shared/components/site/ui/PageHeader";
import { useEffect } from "react";

const SiteCategoryDetails = () => {
  // const [templates, setTemplates] = useState<Template[]>([]);

  // const [templateId, setTemplateId] = useState<number>(0);

  // const [categoryId, setCategoryId] = useState<number>(0);

  // useEffect(() => {
  //   getTemplates();

  //   getCategoryByDynamicTpl();
  // }, []);

  // // get templates
  // const getTemplates = async () => {
  //   try {
  //     const response: TempalteData = await templateService.getTemplates();

  //     setTemplates(response.templates);

  //     const findCategory = response.templates.find(
  //       (template) => +template.id === 7
  //     );

  //     console.log(findCategory);
  //   } catch (error) {}
  // };

  // // get category by dynamic tpl
  // const getCategoryByDynamicTpl = async () => {
  //   try {
  //     const response = await templateService.getTemplateByDynamicTpl(7);
  //     console.log(response);
  //   } catch (error) {}
  // };

  useEffect(() => {
    getCategoryByDynamicTpl();
  }, []);

  // get catgory by the dynamic tpl
  const getCategoryByDynamicTpl = async () => {
    try {
      const response = await categoryService.getCategoryByDynamicTpl(7);
      console.log("response category with dynamic tpl", response);
    } catch (error: any) {
      console.error(error.message);
    }
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
