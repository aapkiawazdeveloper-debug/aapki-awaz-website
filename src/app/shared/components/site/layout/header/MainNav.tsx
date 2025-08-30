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

const MainNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [categories, setCategories] = useState<CategoryData[]>([]);
  const [isLoader, setIsLoader] = useState(true);

  useEffect(() => {
    getCategoryList();
  }, []);

  // get category list
  const getCategoryList = async () => {
    try {
      const response: CategoriesResponse = await axios.get("/api/categories");
      if (response.data.success) {
        const filteredCategory = response.data.categories.filter(
          (category) => +category.main_mega_menu_column >= 1
        );
        setCategories(filteredCategory);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoader(false);
    }
  };

  // toggle dropdown
  const toggleDropdown = (menu: string) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  return (
    <div className="bg-[#337ab7]">
      <nav className="p-4 relative">
        {/* Mobile Menu Button */}
        <div className="flex justify-end items-center md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="cursor-pointer">
            <AiOutlineMenu className="text-white" size={24} />
          </button>
        </div>

        {/* Menu List */}
        <div
          className={`transition-all duration-500 ease-in-out ${
            isOpen ? "max-h-[500px]" : "max-h-0"
          } overflow-hidden md:overflow-visible md:max-h-none`}
        >
          {isLoader ? (
            <ul className="flex flex-col md:flex-row md:items-center gap-4 py-2 md:py-0">
              {[...Array(8)].map((_, index) => (
                <li key={index}>
                  <Skeleton height={18} width={96} />
                </li>
              ))}
            </ul>
          ) : (
            <ul className="flex flex-col md:flex-row md:items-center gap-4 py-2 md:py-0">
              {categories.map((category) => {
                console.log("categiry data ", category);
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

                return (
                  <li
                    key={category.id}
                    className="relative group"
                    onClick={() => toggleDropdown(dropdownId)}
                  >
                    <span className="flex items-center gap-1 text-white text-sm font-poppins cursor-pointer capitalize">
                      {category.display_name} <FiChevronDown size={12} />
                    </span>

                    {columns.length > 0 && (
                      <ul
                        className={`absolute left-0 top-full bg-white shadow-lg rounded-lg z-50 transition-all duration-300 ease-in-out overflow-auto
                          ${
                            openDropdown === dropdownId
                              ? "block"
                              : "hidden md:block md:opacity-0 md:group-hover:opacity-100"
                          }
                        `}
                        style={{
                          maxWidth: "100vw",
                          width: `min(${columns.length * 200}px, 100vw)`,
                        }}
                      >
                        <div
                          className="grid gap-6 py-4 px-2"
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

export default MainNav;
