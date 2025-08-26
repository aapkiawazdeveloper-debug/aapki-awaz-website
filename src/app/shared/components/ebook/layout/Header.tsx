"use client";
import { useState } from "react";
import Link from "next/link";
import { AiOutlineMenu } from "react-icons/ai";
import { FiChevronDown } from "react-icons/fi";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  // For mobile toggle dropdown
  const handleDropdownClick = (menu: string) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  return (
    <div className="bg-[#337ab7]">
      <nav className="px-4 py-2 relative">
        {/* Mobile Header */}
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
          <ul className="flex flex-col md:flex-row md:items-center gap-4 py-2 md:py-0">
            <li>
              <Link href="/" className="text-white text-sm font-poppins">
                Home
              </Link>
            </li>

            {/* Category Dropdown */}
            <li
              className="relative group"
              onClick={() => handleDropdownClick("reporter")}
            >
              <span className="flex items-center gap-1 text-white text-sm font-poppins cursor-pointer">
                Category <FiChevronDown size={12} />
              </span>
              <ul
                className={`absolute left-0 top-full bg-white shadow-lg rounded-lg min-w-[200px] z-50 
                            md:hidden md:group-hover:block
                            transition-all duration-300 ease-in-out overflow-hidden
                            ${
                              openDropdown === "reporter"
                                ? "block"
                                : "hidden md:block md:opacity-0 md:group-hover:opacity-100"
                            }`}
              >
                <li>
                  <Link
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Chandra Raj Singhvi - 2024 - Magazine
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Vaishya Bharati Patrika - June 2022
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Vaishya Pride Introduction
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
