import { Inter, Poppins } from "next/font/google";
import type { Metadata } from "next";
import "../../../styles/globals.css";
import "../../../styles/site.css";
import Header from "@/app/shared/components/ebook/layout/Header";
import Footer from "@/app/shared/components/ebook/layout/Footer";

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

const EbookLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${poppins.variable}`}
    >
      <body className="font-inter">
        <Header />

        <div className="px-4 py-4">
          <main>{children}</main>
        </div>

        <Footer />
      </body>
    </html>
  );
};

export default EbookLayout;
