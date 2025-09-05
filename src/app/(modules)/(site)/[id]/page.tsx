"use client";

import { templateService } from "@/app/services/templateService";
import GridSection from "@/app/shared/components/site/GridSection";
import Pagination from "@/app/shared/components/site/Pagination";
import PageFilter from "@/app/shared/components/site/ui/filters/PageFilter";
import PageHeader from "@/app/shared/components/site/ui/PageHeader";
import { useEffect, useState } from "react";

const SiteCategoryDetails = () => {
  const [templateItems, setTemplateItems] = useState<any[]>([]);

  useEffect(() => {
    getCategoryByDynamicTpl();
  }, []);

  // get catgory by the dynamic tpl
  const getCategoryByDynamicTpl = async () => {
    try {
      const response = await templateService.getCategoryByDynamicTpl(7);
      if (response.success) {
        getTemplates(response.category.dynamic_tpl ?? 7);
      }
    } catch (error: any) {
      console.error(error.message);
    }
  };

  // get template
  const getTemplates = async (id: string) => {
    try {
      const response = await templateService.getTemplateById(id);

      if (response.success) {
        const parsedLayout = JSON.parse(response.template.layout_data).layout;

        const templateItems: any[] = [];

        parsedLayout.map((row: any) => {
          row.columns.map((column: any) => {
            column.items.map((item: any) => {
              templateItems.push(item);
            });
          });
        });
        console.log("Template Items: ", templateItems);
        setTemplateItems(templateItems);
      }
    } catch (error: any) {
      console.error(error.message);
    }
  };

  return (
    <>
      {templateItems.map((templateItem, index) => (
        <div key={index}>
          <div className={index === 0 ? "mt-0" : "mt-4"}>
            <PageHeader
              pageTitle={templateItem.config.title}
              buttons={[
                {
                  id: 1,
                  title: "View More",
                  link: "/",
                },
              ]}
            />
          </div>

          <div className="mt-4">
            <PageFilter />
          </div>

          <div className="mt-4">
            <GridSection />
          </div>

          <div className="mt-4">
            <Pagination />
          </div>
        </div>
      ))}
    </>
  );
};

export default SiteCategoryDetails;
