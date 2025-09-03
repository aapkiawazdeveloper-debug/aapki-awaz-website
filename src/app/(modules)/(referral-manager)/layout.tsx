"use client";

import { useState, useEffect } from "react";
import "../../../styles/globals.css";
import Sidebar from "@/app/shared/components/admin/layout/Sidebar";
import Header from "@/app/shared/components/admin/layout/Header";
import Footer from "@/app/shared/components/admin/layout/Footer";
import { FiHome, FiUsers, FiBell, FiBarChart2, FiGift } from "react-icons/fi";

const ReferralManagerLayout: React.FC<{ children: React.ReactNode }> = ({
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

  // Referral Manager-specific menu
  const menuItems = [
    { name: "Dashboard", href: "/dashboard", icon: FiHome },
    {
      name: "Referral Management",
      icon: FiGift,
      children: [
        {
          name: "Create / Edit Referral Campaigns",
          href: "/referrals/campaigns",
        },
        { name: "Track Referrals", href: "/referrals/track" },
        { name: "Manage Rewards & Payouts", href: "/referrals/rewards" },
      ],
    },
    {
      name: "User Referrals",
      icon: FiUsers,
      children: [
        { name: "Referred Users List", href: "/referrals/users" },
        {
          name: "Referral Conversion Reports",
          href: "/referrals/conversion-reports",
        },
      ],
    },
    {
      name: "Reports & Analytics",
      icon: FiBarChart2,
      children: [
        { name: "Campaign Performance", href: "/referrals/performance" },
        { name: "Earnings Reports", href: "/referrals/earnings" },
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

export default ReferralManagerLayout;
