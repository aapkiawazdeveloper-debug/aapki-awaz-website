"use client";

import { Inter, Poppins } from "next/font/google";
import "../../../styles/globals.css";
import "../../../styles/site.css";
import Header from "@/app/shared/components/site/layout/header/Header";
import Footer from "@/app/shared/components/site/layout/Footer";
import Sidebar from "@/app/shared/components/site/layout/Sidebar";
import { templateService } from "@/app/services/templateService";
import { useEffect, useState } from "react";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

const SiteLayout = ({ children }: { children: React.ReactNode }) => {
  const [templateType, setTemplateType] = useState<string>("");

  useEffect(() => {
    getTemplateById();
  }, []);

  // get template by id
  const getTemplateById = async () => {
    try {
      const response = await templateService.getTemplateById(String(7));

      if (response.success) {
        setTemplateType(response.template.template_type);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const hasSidebar = templateType === "right-sidebar";

  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${poppins.variable}`}
    >
      <body className="font-inter overflow-x-hidden">
        <Header />

        <main
          className={`px-4 py-4 grid gap-6 ${
            hasSidebar ? "grid-cols-12" : "grid-cols-1"
          }`}
        >
          <div
            className={
              hasSidebar ? "col-span-12 lg:col-span-10" : "col-span-12"
            }
          >
            {children}
          </div>
          {hasSidebar && (
            <div className="col-span-12 sm:col-span-5 lg:col-span-2">
              <Sidebar />
            </div>
          )}
        </main>

        <Footer />
      </body>
    </html>
  );
};

export default SiteLayout;
