"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FiHome,
  FiUsers,
  FiSettings,
  FiLogOut,
  FiMonitor,
  FiMessageSquare,
  FiFolder,
  FiFileText,
  FiBook,
} from "react-icons/fi";

const Sidebar: React.FC<{ isOpen: boolean; overlayMode?: boolean }> = ({
  isOpen,
  overlayMode = false,
}) => {
  const pathname = usePathname();

  const menuItems = [
    { name: "Dashboard", href: "/dashboard", icon: FiHome },

    // Content
    { name: "News Management", href: "/news-management", icon: FiFileText },
    { name: "Categories", href: "/categories", icon: FiFolder },
    { name: "Ebook Management", href: "/ebook-management", icon: FiBook },

    // Community
    { name: "Users", href: "/users", icon: FiUsers },
    { name: "Comments", href: "/comments", icon: FiMessageSquare },

    // Monetization
    { name: "Ads Management", href: "/ads-management", icon: FiMonitor },

    // System
    { name: "Settings", href: "/settings", icon: FiSettings },
  ];

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
          {menuItems.map(({ name, href, icon: Icon }) => {
            const isActive = pathname === href;
            return (
              <li key={name}>
                <Link
                  href={href}
                  className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-blue-100 text-blue-600"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span>{name}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Footer Logout at bottom */}
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
