import type { Metadata } from "next";
import "../../styles/globals.css";

export const metadata: Metadata = {
    title: "Next.js admin",
    description: "Next.js admin",
};

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    )
}

export default AdminLayout;
