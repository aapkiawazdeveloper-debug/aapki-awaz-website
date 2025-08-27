"use client";

import { ReactNode, useState } from "react";
import Breadcrumbs from "@/app/shared/components/admin/Breadcrumbs";
import PageSubHeader from "@/app/shared/components/admin/PageSubHeader";
import Pagination from "../paginations/Pagination";

interface AdminPageWrapperProps {
  pageTitle: string;
  breadcrumbs: { label: string; path?: string }[];
  actions?: { label: string; icon: ReactNode; onClick?: () => void }[];
  children: ReactNode;
  totalItems?: number;
  itemsPerPage?: number;
  onPageChange?: (page: number) => void;
}

const AdminPageWrapper = ({
  pageTitle,
  breadcrumbs,
  actions,
  children,
  totalItems,
  itemsPerPage = 10,
  onPageChange,
}: AdminPageWrapperProps) => {
  const [currentPage, setCurrentPage] = useState<number>(1);

  const totalPages: number = totalItems
    ? Math.ceil(totalItems / itemsPerPage)
    : 0;

  // Handle page change
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    if (onPageChange) onPageChange(page);
  };

  return (
    <div>
      <Breadcrumbs pageTitle={pageTitle} items={breadcrumbs} />

      {actions && actions.length > 0 && <PageSubHeader actions={actions} />}

      <div className="mt-6">{children}</div>

      {totalItems && totalPages > 1 && (
        <div className="mt-6 flex justify-center">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </div>
      )}
    </div>
  );
};

export default AdminPageWrapper;
