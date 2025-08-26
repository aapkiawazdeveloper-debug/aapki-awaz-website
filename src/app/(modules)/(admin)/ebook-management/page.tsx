import { Metadata } from "next";
import EbookManagement from "@/app/shared/components/admin/EbookManagement";

export const metadata: Metadata = {
  title: "Ebook Management - Admin Dashboard | Aapki Awaz",
  description:
    "Manage all ebooks in the admin dashboard of Aapki Awaz. Add, edit, or delete ebooks and organize your collection efficiently.",
};

const EbookManagementPage = () => {
  return (
    <>
      <EbookManagement />
    </>
  );
};

export default EbookManagementPage;
