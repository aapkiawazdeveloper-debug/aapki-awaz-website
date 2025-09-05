"use client";
import React from "react";
import Link from "next/link";
import { FiChevronsLeft, FiChevronsRight } from "react-icons/fi";

const Pagination: React.FC<{
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}> = ({ currentPage, totalPages, onPageChange }) => {
  // Go to page
  const goToPage = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  return (
    <div className="flex items-center mt-6">
      <ul className="flex list-none p-0 m-0">
        {/* First */}
        <li>
          <button
            onClick={() => goToPage(1)}
            disabled={currentPage === 1}
            className="px-3 py-1 border border-[#eee] text-black hover:bg-gray-100 disabled:opacity-50 cursor-pointer"
          >
            First
          </button>
        </li>

        {/* Prev */}
        <li>
          <button
            onClick={() => goToPage(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-3 py-1 border border-[#eee] text-black h-full hover:bg-gray-100 disabled:opacity-50 cursor-pointer"
          >
            <FiChevronsLeft />
          </button>
        </li>

        {/* Page Numbers */}
        {[...Array(totalPages)].map((_, index) => {
          const pageNum = index + 1;
          return (
            <li key={pageNum}>
              <button
                onClick={() => goToPage(pageNum)}
                className={`px-3 py-1 border border-[#eee] cursor-pointer ${
                  currentPage === pageNum
                    ? "bg-blue-600 text-white"
                    : "text-black hover:bg-gray-100"
                }`}
              >
                {pageNum}
              </button>
            </li>
          );
        })}

        {/* Next */}
        <li>
          <button
            onClick={() => goToPage(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-3 py-1 border border-[#eee] text-black h-full hover:bg-gray-100 disabled:opacity-50 cursor-pointer"
          >
            <FiChevronsRight />
          </button>
        </li>

        {/* Last */}
        <li>
          <button
            onClick={() => goToPage(totalPages)}
            disabled={currentPage === totalPages}
            className="px-3 py-1 border border-[#eee] text-black hover:bg-gray-100 disabled:opacity-50 cursor-pointer"
          >
            Last
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
