"use client";
import { useState } from "react";
import Link from "next/link";
import { AiOutlineMenu } from "react-icons/ai";
import { FiChevronDown } from "react-icons/fi";

const MainNav = () => {
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

            {/* Reporter Dropdown */}
            <li
              className="relative group"
              onClick={() => handleDropdownClick("reporter")}
            >
              <span className="flex items-center gap-1 text-white text-sm font-poppins cursor-pointer">
                Reporter <FiChevronDown size={12} />
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
                    href="/reporter/login-via-mobile-number"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Login via Mobile Number
                  </Link>
                </li>
                <li>
                  <Link
                    href="/reporter/login-via-userid"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Login via userid
                  </Link>
                </li>
                <li>
                  <Link
                    href="/reporter/registration"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Registration
                  </Link>
                </li>
              </ul>
            </li>

            {/* Business Associates Dropdown */}
            <li
              className="relative group"
              onClick={() => handleDropdownClick("business")}
            >
              <span className="flex items-center gap-1 text-white text-sm font-poppins cursor-pointer">
                Business Associates <FiChevronDown size={12} />
              </span>
              <ul
                className={`absolute left-0 top-full bg-white shadow-lg rounded-lg min-w-[200px] z-50 
                            md:hidden md:group-hover:block overflow-hidden
                            transition-all duration-300 ease-in-out
                            ${
                              openDropdown === "business"
                                ? "block"
                                : "hidden md:block md:opacity-0 md:group-hover:opacity-100"
                            }`}
              >
                <li>
                  <Link
                    href="/business-associates/login-via-mobile-number"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Login via Mobile Number
                  </Link>
                </li>
                <li>
                  <Link
                    href="/business-associates/login-via-userid"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Login via userid
                  </Link>
                </li>
                <li>
                  <Link
                    href="/business-associates/registration"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Registration
                  </Link>
                </li>
              </ul>
            </li>

            <li>
              <Link href="/leader-of-rajasthan-minister-mla-mp-district" className="text-white text-sm font-poppins">
                Member of Parliament - MP
              </Link>
            </li>
            <li>
              <Link href="/leader-of-rajasthan-minister-mla" className="text-white text-sm font-poppins">
                MLA of Rajasthan
              </Link>
            </li>
            <li>
              <Link href="/panchayat-samiti-pradhan-rajasthan" className="text-white text-sm font-poppins">
                Panchayat Samiti - Pradhan
              </Link>
            </li>
            <li>
              <Link href="/video-interview" className="text-white text-sm font-poppins">
                Video Interview
              </Link>
            </li>
            <li>
              <Link href="/business-news" className="text-white text-sm font-poppins">
                Business News
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default MainNav;
