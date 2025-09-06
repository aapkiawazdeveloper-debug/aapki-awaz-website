"use client";

import { templateService } from "@/app/services/templateService";
import GridSection from "@/app/shared/components/site/GridSection";
import PageFilter from "@/app/shared/components/site/ui/filters/PageFilter";
import PageHeader from "@/app/shared/components/site/ui/PageHeader";
import { useEffect, useState } from "react";

const SiteCategoryDetails = () => {
  const [templateRows, setTemplateRows] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getCategoryByDynamicTpl();
  }, []);

  // get category by the dynamic tpl
  const getCategoryByDynamicTpl = async () => {
    setLoading(true);
    try {
      const response = await templateService.getCategoryByDynamicTpl(7);
      if (response.success) {
        getTemplates(response.category.dynamic_tpl ?? 7);
      }
    } catch (error: any) {
      console.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  // get template
  const getTemplates = async (id: string) => {
    setLoading(true);
    try {
      const response = await templateService.getTemplateById(id);

      if (response.success) {
        const parsedLayout = JSON.parse(response.template.layout_data).layout;
        setTemplateRows(parsedLayout); // keep full rows & columns
      }
    } catch (error: any) {
      console.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  const getDynamicColSpan = (columnsLength: number) => {
    switch (columnsLength) {
      case 1:
        return "col-span-12";
      case 2:
        return "col-span-12 sm:col-span-6";
      case 3:
        return "col-span-12 sm:col-span-6 lg:col-span-4";
      case 4:
        return "col-span-12 sm:col-span-6 lg:col-span-3";
      default:
        return "col-span-12";
    }
  };

  if (loading) {
    return <p>Loading template...</p>;
  }

  return (
    <>
      {templateRows.map((row, rowIndex) => {
        const colSpanClass = getDynamicColSpan(row.columns.length);

        return (
          <div className="grid grid-cols-12 gap-4 mb-6" key={row.rowId}>
            {row.columns.map((column: any) => (
              <div key={column.columnId} className={colSpanClass}>
                {column.items.map((item: any, itemIndex: number) => (
                  <div key={itemIndex} className="mb-6">
                    {/* Header */}
                    <PageHeader
                      pageTitle={item.config.title}
                      buttons={[{ id: 1, title: "View More", link: "/" }]}
                    />

                    {item.config.enable_search === "1" && <PageFilter />}

                    {item.type === "news" && (
                      <GridSection dataColumn={item.config.data_column} />
                    )}

                    {item.type === "video" && (
                      <GridSection dataColumn={item.config.data_column} />
                    )}
                    
                    {item.type === "categories" && (
                      <GridSection dataColumn={item.config.data_column} />
                    )}

                    {item.type === "ads" && (
                      <GridSection dataColumn={item.config.data_column} />
                    )}

                    {item.type === "profiles" && (
                      <GridSection dataColumn={item.config.data_column} />
                    )}
                    
                    {item.type === "gallery" && (
                      <GridSection dataColumn={item.config.data_column} />
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>
        );
      })}
    </>
  );
};

export default SiteCategoryDetails;
