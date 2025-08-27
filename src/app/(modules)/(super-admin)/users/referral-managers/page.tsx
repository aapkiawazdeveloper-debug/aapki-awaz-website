import Link from "next/link";
import { FiDownload, FiEdit, FiEye, FiPlus, FiTrash2 } from "react-icons/fi";
import CommonTable, {
  Column,
} from "@/app/shared/components/admin/ui/tables/CommonTable";
import AdminPageWrapper from "@/app/shared/components/admin/ui/wrapper/AdminPageWrapper";
import { Metadata } from "next";

// Metadata
export const metadata: Metadata = {
  title: "Referral Managers - Admin Dashboard | Aapki Awaz",
  description:
    "Manage referral managers in the admin dashboard of Aapki Awaz. View, edit, disable, or manage referral campaigns for each manager.",
};

// Type for Referral Manager
interface ReferralManager {
  id: number;
  name: string;
  email: string;
  mobile: string;
  managedCampaigns: string[];
  status: "Active" | "Pending" | "Inactive";
  createdAt: string;
}

// Sample data
const referralManagers: ReferralManager[] = [
  {
    id: 701,
    name: "Sophia Williams",
    email: "sophia.williams@example.com",
    mobile: "+1 555-3344",
    managedCampaigns: ["Spring Sale", "Referral Bonus 2024"],
    status: "Active",
    createdAt: "2023-05-15",
  },
  {
    id: 702,
    name: "Liam Johnson",
    email: "liam.johnson@example.com",
    mobile: "+1 555-4455",
    managedCampaigns: ["Summer Promo", "Loyalty Rewards"],
    status: "Pending",
    createdAt: "2024-02-12",
  },
  {
    id: 703,
    name: "Olivia Brown",
    email: "olivia.brown@example.com",
    mobile: "+44 20 7946 4567",
    managedCampaigns: ["Holiday Campaign"],
    status: "Inactive",
    createdAt: "2023-09-20",
  },
  {
    id: 704,
    name: "Noah Davis",
    email: "noah.davis@example.com",
    mobile: "+61 2 9876 3456",
    managedCampaigns: ["New Year Referral"],
    status: "Active",
    createdAt: "2024-03-15",
  },
];

// Table columns
const columns: Column<ReferralManager>[] = [
  {
    key: "name",
    label: "Referral Manager Name",
    render: (row: ReferralManager) => (
      <Link
        href={`/users/referral-managers/${row.id}`}
        className="text-blue-600 hover:underline"
      >
        {row.name}
      </Link>
    ),
  },
  { key: "email", label: "Email" },
  { key: "mobile", label: "Mobile Number" },
  {
    key: "managedCampaigns",
    label: "Managed Campaigns",
    render: (row: ReferralManager) => row.managedCampaigns.join(", "),
  },
  {
    key: "status",
    label: "Status",
    render: (row: ReferralManager) => {
      let colorClass = "bg-gray-100 text-gray-800";
      if (row.status === "Active") colorClass = "bg-green-100 text-green-800";
      else if (row.status === "Pending")
        colorClass = "bg-yellow-100 text-yellow-800";
      else if (row.status === "Inactive")
        colorClass = "bg-red-100 text-red-800";

      return (
        <span
          className={`inline-block px-3 py-1 text-xs font-medium rounded-full ${colorClass}`}
        >
          {row.status}
        </span>
      );
    },
  },
  {
    key: "createdAt",
    label: "Registered On",
    render: (row: ReferralManager) =>
      new Date(row.createdAt).toLocaleDateString(),
  },
];

// Row actions
const rowActions = (row: ReferralManager) => (
  <div className="flex space-x-2">
    <Link
      href={`/users/referral-managers/${row.id}`}
      className="text-blue-600 hover:text-blue-800"
    >
      <FiEye title="View Details" />
    </Link>
    <button className="text-green-600 hover:text-green-800 cursor-pointer">
      <FiEdit title="Edit Referral Manager" />
    </button>
    <button className="text-red-600 hover:text-red-800 cursor-pointer">
      <FiTrash2 title="Disable/Delete Referral Manager" />
    </button>
  </div>
);

const ReferralManagersPage = () => {
  return (
    <AdminPageWrapper
      pageTitle="Referral Managers"
      breadcrumbs={[
        { label: "Dashboard", path: "/super-admin-dashboard" },
        { label: "Users Management" },
        { label: "Referral Managers" },
      ]}
      actions={[
        { label: "Add Referral Manager", icon: <FiPlus /> },
        { label: "Export", icon: <FiDownload /> },
      ]}
    >
      <CommonTable
        columns={columns}
        data={referralManagers}
        maxHeight="500px"
        actions={rowActions}
      />
    </AdminPageWrapper>
  );
};

export default ReferralManagersPage;
