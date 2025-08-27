"use client";

import { useState, useEffect } from "react";
import "../../styles/globals.css";
import Sidebar from "@/app/shared/components/admin/layout/Sidebar";
import Header from "@/app/shared/components/admin/layout/Header";
import Footer from "@/app/shared/components/admin/layout/Footer";
import {
  FiHome,
  FiPackage,
  FiBell,
  FiBox,
  FiDollarSign,
  FiBarChart2,
} from "react-icons/fi";

const ProductManagerLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setIsMobile(true);
        setIsSidebarOpen(false);
      } else {
        setIsMobile(false);
        setIsSidebarOpen(true);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const closeSidebar = () => isMobile && setIsSidebarOpen(false);

  // Product Manager-specific menu
  const menuItems = [
    { name: "Dashboard", href: "/product-manager-dashboard", icon: FiHome },
    {
      name: "Product Management",
      icon: FiPackage,
      children: [
        { name: "Add / Edit Products", href: "/products/manage" },
        { name: "Product Categories", href: "/products/categories" },
        { name: "Product Media (Images / Videos)", href: "/products/media" },
      ],
    },
    {
      name: "Inventory & Stock",
      icon: FiBox,
      children: [
        { name: "Stock Overview", href: "/inventory/overview" },
        { name: "Low Stock Alerts", href: "/inventory/alerts" },
      ],
    },
    {
      name: "Pricing & Discounts",
      icon: FiDollarSign,
      children: [
        { name: "Manage Pricing", href: "/pricing/manage" },
        { name: "Offers & Coupons", href: "/pricing/offers" },
      ],
    },
    {
      name: "Reports",
      icon: FiBarChart2,
      children: [
        { name: "Product Performance", href: "/reports/performance" },
        { name: "Sales Reports", href: "/reports/sales" },
      ],
    },
    { name: "Notifications", href: "/notifications", icon: FiBell },
  ];

  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className="bg-gray-100">
        <div className="flex h-screen overflow-hidden relative">
          {/* Sidebar */}
          <Sidebar
            isOpen={isSidebarOpen}
            overlayMode={true}
            menuItems={menuItems}
          />

          {/* Overlay only for mobile */}
          {isSidebarOpen && isMobile && (
            <div
              className="fixed inset-0 bg-gray-500/50 z-40"
              onClick={closeSidebar}
            />
          )}

          {/* Main content */}
          <div
            className={`flex-1 flex flex-col transition-all duration-300 relative z-10
              ${!isMobile && isSidebarOpen ? "ml-72" : "ml-0"}
            `}
          >
            <Header onToggleSidebar={toggleSidebar} />
            <main className="flex-1 overflow-y-auto p-4">{children}</main>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
};

export default ProductManagerLayout;
