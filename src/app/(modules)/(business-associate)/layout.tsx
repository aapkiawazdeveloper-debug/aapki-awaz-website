"use client";

import { useState, useEffect } from "react";
import "../../../styles/globals.css";
import Sidebar from "@/app/shared/components/admin/layout/Sidebar";
import Header from "@/app/shared/components/admin/layout/Header";
import Footer from "@/app/shared/components/admin/layout/Footer";
import { FiHome, FiMonitor, FiBarChart2, FiBell } from "react-icons/fi";

const BusinessAssociateLayout: React.FC<{ children: React.ReactNode }> = ({
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

  // Business Associate-specific menu
  const menuItems = [
    { name: "Dashboard", href: "/business-associate/dashboard", icon: FiHome },
    {
      name: "Business Management",
      icon: FiMonitor,
      children: [
        {
          name: "Add / Edit Businesses",
          href: "/business-associate/business/add-edit",
        },
        { name: "Advertisements", href: "/business-associate/business/ads" },
        {
          name: "Campaign Reports",
          href: "/business-associate/business/campaign-reports",
        },
      ],
    },
    { name: "Reports", href: "/business-associate/reports", icon: FiBarChart2 },
    {
      name: "Notifications",
      href: "/business-associate/notifications",
      icon: FiBell,
    },
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

export default BusinessAssociateLayout;
