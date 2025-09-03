import type { Metadata } from "next";
import "../../../styles/globals.css";

export const metadata: Metadata = {
    title: "Next.js auth",
    description: "Next.js auth",
};

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <html lang="en">
            <body>
                <main>{children}</main>
            </body>
        </html>
    )
}

export default AuthLayout;
