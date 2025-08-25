"use client";

import { useState } from "react";
import { FiBell, FiSearch, FiMenu } from "react-icons/fi";
import Image from "next/image";

const Header: React.FC<{ onToggleSidebar: () => void }> = ({
  onToggleSidebar,
}) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header className="bg-white shadow-md px-4 py-3 flex items-center justify-between w-full relative z-50">
      {/* Hamburger menu always visible above sidebar */}
      <button
        onClick={onToggleSidebar}
        className="text-gray-500 transition-colors cursor-pointer"
      >
        <FiMenu size={26} />
      </button>

      {/* Search bar */}
      <div className="hidden md:flex flex-1 justify-center px-4">
        <div className="relative w-full max-w-md">
          <input
            type="text"
            placeholder="Search..."
            className="w-full px-4 py-2 rounded-lg border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <FiSearch className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500" />
        </div>
      </div>

      {/* Right: Notifications + Profile */}
      <div className="flex items-center gap-4 relative">
        <button className="relative">
          <FiBell className="w-6 h-6 text-gray-600 hover:text-blue-600 transition-colors" />
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
        </button>

        <div className="relative">
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="cursor-pointer flex items-center gap-2 px-2 py-1 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
          >
            <Image
              src="/assets/images/user-image.jpg"
              alt="Admin Avatar"
              width={192}
              height={240}
              className="w-[36px] h-[36px] object-cover rounded-full"
            />
          </button>

          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-52 bg-white shadow-lg rounded-lg border border-gray-200 z-50">
              {/* Dropdown content */}
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
