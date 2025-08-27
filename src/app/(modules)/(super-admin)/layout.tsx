"use client";

import { useState, useEffect } from "react";
import "../../styles/globals.css";
import Sidebar from "@/app/shared/components/admin/layout/Sidebar";
import Header from "@/app/shared/components/admin/layout/Header";
import Footer from "@/app/shared/components/admin/layout/Footer";
import {
  FiHome,
  FiUsers,
  FiSettings,
  FiMonitor,
  FiFileText,
  FiPackage,
  FiTrendingUp,
  FiBell,
} from "react-icons/fi";

const SuperAdminLayout: React.FC<{ children: React.ReactNode }> = ({
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

  // Super Admin-specific menu
  const menuItems = [
    { name: "Dashboard", href: "/super-admin-dashboard", icon: FiHome },
    {
      name: "Users Management",
      icon: FiUsers,
      children: [
        { name: "Franchise", href: "/users/franchise" },
        { name: "Business Associate", href: "/users/business-associate" },
        { name: "Editors", href: "/users/editors" },
        { name: "Reporters", href: "/users/reporters" },
        { name: "Business Managers", href: "/users/business-managers" },
        { name: "Product Managers", href: "/users/product-managers" },
        { name: "Referral Managers", href: "/users/referral-managers" },
      ],
    },
    {
      name: "Content Management",
      icon: FiFileText,
      children: [
        { name: "All News", href: "/content/news" },
        { name: "Categories", href: "/content/categories" },
        { name: "Locations", href: "/content/locations" },
        { name: "Ebooks", href: "/content/ebooks" }, // Added Ebook
      ],
    },
    {
      name: "Business Management",
      icon: FiMonitor,
      children: [
        { name: "Advertisements", href: "/business/ads" },
        { name: "Business Reports", href: "/business/reports" },
      ],
    },
    {
      name: "Product Management",
      icon: FiPackage,
      children: [
        { name: "All Products", href: "/products/all" },
        { name: "Categories & Inventory", href: "/products/categories" },
        { name: "Pricing & Discounts", href: "/products/pricing" },
        { name: "Ebook Management", href: "/products/ebooks" },
      ],
    },
    {
      name: "Referral Management",
      icon: FiTrendingUp,
      children: [
        { name: "Campaigns", href: "/referrals/campaigns" },
        { name: "Rewards & Payouts", href: "/referrals/rewards" },
        { name: "Referral Analytics", href: "/referrals/analytics" },
      ],
    },
    {
      name: "System Settings",
      icon: FiSettings,
      children: [
        { name: "Site Configuration", href: "/settings/site" },
        { name: "Permissions & Roles", href: "/settings/roles" },
        { name: "Backup & Restore", href: "/settings/backup" },
      ],
    },
    { name: "Analytics & Reports", href: "/analytics", icon: FiTrendingUp },
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

export default SuperAdminLayout;
