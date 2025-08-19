import { Inter, Poppins } from "next/font/google";
import type { Metadata } from "next";
import "../../styles/globals.css";
import "../../styles/site.css";
import Header from "@/app/shared/components/site/layout/Header";
import Footer from "@/app/shared/components/site/layout/Footer";
import Sidebar from "@/app/shared/components/site/layout/Sidebar";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
});

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    variable: "--font-poppins",
});

export const metadata: Metadata = {
    title: "Next.js site",
    description: "Next.js site",
};

const SiteLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
            <body className="font-inter">
                <Header />

                <div className="container mx-auto px-4 py-4 grid grid-cols-12 gap-6">
                    <main className="col-span-12 lg:col-span-9">{children}</main>

                    <div className="col-span-12 lg:col-span-3">
                        <Sidebar />
                    </div>
                </div>

                <Footer />
            </body>
        </html>
    );
};

export default SiteLayout;
