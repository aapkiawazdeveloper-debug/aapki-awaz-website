"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IconType } from "react-icons";
import { FiChevronDown, FiChevronRight, FiLogOut } from "react-icons/fi";
import { useState } from "react";

interface MenuItem {
  name: string;
  href?: string;
  icon: IconType;
  children?: { name: string; href: string }[];
}

interface SidebarProps {
  isOpen: boolean;
  overlayMode?: boolean;
  menuItems: MenuItem[];
}

const Sidebar: React.FC<SidebarProps> = ({
  isOpen,
  overlayMode = false,
  menuItems,
}) => {
  const pathname = usePathname();
  const [openDropdowns, setOpenDropdowns] = useState<string[]>([]);

  const toggleDropdown = (name: string) => {
    setOpenDropdowns((prev) =>
      prev.includes(name) ? prev.filter((n) => n !== name) : [...prev, name]
    );
  };

  return (
    <aside
      className={`
        fixed top-0 left-0 h-full bg-white shadow-md
        transform transition-transform duration-300
        w-72 z-50
        ${isOpen ? "translate-x-0" : "-translate-x-full"}
        ${overlayMode ? "md:absolute" : "md:static"}
        flex flex-col
      `}
    >
      {/* Logo */}
      <div className="p-6 flex items-center justify-center shrink-0">
        <Image
          src="/assets/images/aapki-awaz-logo.jpg"
          width={80}
          height={80}
          alt="logo"
          className="object-contain w-20 h-20"
        />
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto px-2">
        <ul className="flex flex-col gap-y-2 mb-1 mt-4">
          {menuItems.map(({ name, href, icon: Icon, children }) => {
            const isActive = pathname === href;
            const isDropdownOpen = openDropdowns.includes(name);

            return (
              <li key={name}>
                {children ? (
                  <>
                    <button
                      onClick={() => toggleDropdown(name)}
                      className={`flex items-center justify-between w-full gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors cursor-pointer ${
                        isDropdownOpen
                          ? "bg-blue-100 text-blue-600"
                          : "text-gray-700 hover:bg-gray-100"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <Icon className="w-5 h-5" />
                        <span>{name}</span>
                      </div>
                      {isDropdownOpen ? (
                        <FiChevronDown className="w-4 h-4 transition-transform duration-300 rotate-180" />
                      ) : (
                        <FiChevronRight className="w-4 h-4 transition-transform duration-300" />
                      )}
                    </button>

                    {/* Dropdown with animation */}
                    <div
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${
                        isDropdownOpen
                          ? "max-h-96 opacity-100"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <ul className="pl-10 mt-1 space-y-1">
                        {children.map((child) => (
                          <li key={child.name}>
                            <Link
                              href={child.href}
                              className={`block px-3 py-1.5 rounded-lg text-sm font-medium ${
                                pathname === child.href
                                  ? "bg-blue-50 text-blue-600"
                                  : "text-gray-600 hover:bg-gray-100"
                              }`}
                            >
                              {child.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </>
                ) : (
                  <Link
                    href={href || "#"}
                    className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                      isActive
                        ? "bg-blue-100 text-blue-600"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span>{name}</span>
                  </Link>
                )}
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Footer Logout */}
      <div className="px-4 py-2 border-t border-gray-200 mt-auto">
        <Link
          href="/logout"
          className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-100"
        >
          <FiLogOut className="w-5 h-5" />
          <span>Logout</span>
        </Link>
      </div>
    </aside>
  );
};

export default Sidebar;
