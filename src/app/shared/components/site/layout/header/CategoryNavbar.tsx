"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AiOutlineMenu } from "react-icons/ai";
import { FiChevronDown } from "react-icons/fi";
import axios from "axios";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import {
  CategoriesResponse,
  CategoryData,
  TopMenuMegaCols,
} from "@/app/shared/types/category";

const CategoryNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [categories, setCategories] = useState<CategoryData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getCategoryList();
  }, []);

  const getCategoryList = async () => {
    try {
      const response: CategoriesResponse = await axios.get("/api/categories");
      if (response.data.success) {
        const filteredCategory = response.data.categories.filter(
          (category) => +category.top_mega_menu_column >= 1
        );
        setCategories(filteredCategory);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const toggleDropdown = (menu: string) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  return (
    <div className="bg-[#ccc]">
      <nav className="p-4 relative">
        {/* Mobile Toggle Button */}
        <div className="flex justify-end items-center md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="cursor-pointer text-white"
          >
            <AiOutlineMenu size={24} />
          </button>
        </div>

        {/* Menu List */}
        <div
          className={`transition-all duration-500 ease-in-out ${
            isOpen ? "max-h-[2000px]" : "max-h-0"
          } overflow-hidden md:overflow-visible md:max-h-none`}
        >
          {loading ? (
            <ul className="flex flex-col md:flex-row md:items-center gap-4 py-2 md:py-0">
              {[...Array(8)].map((_, index) => (
                <li key={index}>
                  <Skeleton height={18} width={96} />
                </li>
              ))}
            </ul>
          ) : (
            <ul className="flex flex-col md:flex-row md:items-center gap-4 py-2 md:py-0">
              <li>
                <Link
                  href="/"
                  className="text-[#0000ff] text-sm font-poppins block py-2"
                >
                  Home
                </Link>
              </li>

              {categories.map((category, index) => {
                const columns: CategoryData[][] = [];
                if (category.childColumns) {
                  for (let i = 1; i <= 6; i++) {
                    const colKey =
                      `topmenu_mega_col${i}` as keyof TopMenuMegaCols;
                    const colData = category.childColumns[colKey];
                    if (colData && colData.length > 0) {
                      columns.push(colData);
                    }
                  }
                }

                const dropdownId = `category-${category.id}`;
                const alignRight = index >= categories.length - 4;
                const isOpenMobile = openDropdown === dropdownId;

                return (
                  <li key={category.id} className="relative group">
                    {/* Category Button */}
                    <button
                      className="flex gap-x-2 items-center text-[#0000ff] text-sm font-poppins cursor-pointer py-2"
                      onClick={() => {
                        if (window.innerWidth < 768) {
                          toggleDropdown(dropdownId);
                        }
                      }}
                    >
                      <span className="capitalize">
                        {category.display_name}
                      </span>
                      <FiChevronDown
                        size={12}
                        className={`transition-transform duration-300 md:group-hover:rotate-180 ${
                          isOpenMobile ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {/* Dropdown */}
                    {columns.length > 0 && (
                      <ul
                        className={`
                          md:absolute md:top-full md:shadow-lg md:rounded-lg md:z-50
                          md:opacity-0 md:invisible md:translate-y-2
                          md:group-hover:opacity-100 md:group-hover:visible md:group-hover:translate-y-0
                          transition-all duration-300 ease-in-out
                          ${
                            isOpenMobile
                              ? "max-h-[2000px] opacity-100"
                              : "max-h-0 opacity-0"
                          }
                        `}
                        style={{
                          maxWidth: "100vw",
                          width: "100%",
                          left: !alignRight ? 0 : undefined,
                          right: alignRight ? 0 : undefined,
                        }}
                      >
                        <div
                          className="grid gap-6 py-4 px-2 md:grid-cols-1"
                          style={{
                            display: "grid",
                            gridTemplateColumns: `repeat(${columns.length}, minmax(0,1fr))`,
                          }}
                        >
                          {columns.map((colItems, colIndex) => (
                            <div key={colIndex}>
                              {colItems.map((child) => (
                                <li key={child.id}>
                                  <Link
                                    href={child.system_short_url || "/"}
                                    className="block px-2 py-1 text-sm text-gray-700 hover:bg-gray-100 rounded"
                                  >
                                    {child.display_name}
                                  </Link>
                                </li>
                              ))}
                            </div>
                          ))}
                        </div>
                      </ul>
                    )}
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </nav>
    </div>
  );
};

export default CategoryNavbar;
