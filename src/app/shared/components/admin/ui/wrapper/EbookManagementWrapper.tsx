"use client";

import Breadcrumbs from "@/app/shared/components/admin/Breadcrumbs";
import PageSubHeader from "@/app/shared/components/admin/PageSubHeader";
import EbookCard from "@/app/shared/components/admin/ui/cards/EbookCard";
import { FiDownload, FiPlus } from "react-icons/fi";
import Pagination from "../paginations/Pagination";
import { useState } from "react";

const EbookManagementWrapper = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const ebooksPerPage = 12;
  const totalEbooks = 100;
  const totalPages = Math.ceil(totalEbooks / ebooksPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // Fetch new data for this page if using API
  };

  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Dashboard", path: "/dashboard" },
          { label: "Ebook Management" },
        ]}
        pageTitle="Ebook Management"
      />

      <PageSubHeader
        actions={[
          { label: "Export", icon: <FiDownload /> },
          { label: "Add New Ebook", icon: <FiPlus /> },
        ]}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
        {Array.from({ length: 20 }).map((_, index) => (
          <EbookCard key={index} />
        ))}
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </>
  );
};

export default EbookManagementWrapper;
