import EbookManagementWrapper from "@/app/shared/components/admin/ui/wrapper/EbookManagementWrapper";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ebook Management - Admin Dashboard | Aapki Awaz",
  description:
    "Manage all ebooks in the admin dashboard of Aapki Awaz. Add, edit, or delete ebooks and organize your collection efficiently.",
};

const EbookManagementPage = () => {
  return (
    <>
      <EbookManagementWrapper />
    </>
  );
};

export default EbookManagementPage;
