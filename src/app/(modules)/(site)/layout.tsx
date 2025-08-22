import { Inter, Poppins } from "next/font/google";
import type { Metadata } from "next";
import "../../styles/globals.css";
import "../../styles/site.css";
import Header from "@/app/shared/components/site/layout/Header";
import Footer from "@/app/shared/components/site/layout/Footer";
import Sidebar from "@/app/shared/components/site/layout/Sidebar";

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

export const metadata: Metadata = {
  title: "Aap ki Awaz",
  description: "Aap ki Awaz - Hindi & English News Website",
};

const SiteLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="font-inter">
        <Header />

        <div className="px-4 py-4 grid grid-cols-12 gap-6">
          <main className="col-span-12 lg:col-span-10">{children}</main>

          <div className="col-span-8 sm:col-span-5 lg:col-span-2">
            <Sidebar />
          </div>
        </div>

        <Footer />
      </body>
    </html>
  );
};

export default SiteLayout;
