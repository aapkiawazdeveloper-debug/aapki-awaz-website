import type { Metadata } from "next";
import "../../styles/globals.css";
import Header from "@/app/shared/components/site/layout/Header";
import Footer from "@/app/shared/components/site/layout/Footer";
import Sidebar from "@/app/shared/components/site/layout/Sidebar";

export const metadata: Metadata = {
    title: "Next.js site",
    description: "Next.js site",
};

const SiteLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <html lang="en">
            <body>
                <Header />
                <div className="flex flex-1 container mx-auto px-4">
                    <main className="flex-1 gap-4 py-4">
                        {children}
                    </main>
                    <Sidebar />
                </div>
                <Footer />
            </body>
        </html>
    )
}

export default SiteLayout;
