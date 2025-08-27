import Link from "next/link";
import { FiDownload, FiEdit, FiEye, FiPlus, FiTrash2 } from "react-icons/fi";
import CommonTable, {
  Column,
} from "@/app/shared/components/admin/ui/tables/CommonTable";
import AdminPageWrapper from "@/app/shared/components/admin/ui/wrapper/AdminPageWrapper";
import { Metadata } from "next";

// Metadata
export const metadata: Metadata = {
  title: "Business Managers - Admin Dashboard | Aapki Awaz",
  description:
    "Manage business managers in the admin dashboard of Aapki Awaz. View, edit, disable, or manage assigned businesses for each manager.",
};

// Type for Business Manager
interface BusinessManager {
  id: number;
  name: string;
  email: string;
  mobile: string;
  assignedBusinesses: string[];
  status: "Active" | "Pending" | "Inactive";
  createdAt: string;
}

// Sample data
const businessManagers: BusinessManager[] = [
  {
    id: 501,
    name: "Alice Roberts",
    email: "alice.roberts@example.com",
    mobile: "+1 555-9911",
    assignedBusinesses: ["Global Traders", "Tech Solutions"],
    status: "Active",
    createdAt: "2023-06-20",
  },
  {
    id: 502,
    name: "Brian Miller",
    email: "brian.miller@example.com",
    mobile: "+1 555-8822",
    assignedBusinesses: ["Bright Enterprises", "FreshMart"],
    status: "Pending",
    createdAt: "2024-01-10",
  },
  {
    id: 503,
    name: "Clara Evans",
    email: "clara.evans@example.com",
    mobile: "+44 20 7946 2345",
    assignedBusinesses: ["Tasty Bites"],
    status: "Inactive",
    createdAt: "2023-09-15",
  },
  {
    id: 504,
    name: "David Kim",
    email: "david.kim@example.com",
    mobile: "+82 10-9876-5432",
    assignedBusinesses: ["FreshMart", "Bright Foods"],
    status: "Active",
    createdAt: "2024-02-28",
  },
];

// Table columns
const columns: Column<BusinessManager>[] = [
  {
    key: "name",
    label: "Manager Name",
    render: (row: BusinessManager) => (
      <Link
        href={`/users/business-managers/${row.id}`}
        className="text-blue-600 hover:underline"
      >
        {row.name}
      </Link>
    ),
  },
  { key: "email", label: "Email" },
  { key: "mobile", label: "Mobile Number" },
  {
    key: "assignedBusinesses",
    label: "Assigned Businesses",
    render: (row: BusinessManager) => row.assignedBusinesses.join(", "),
  },
  {
    key: "status",
    label: "Status",
    render: (row: BusinessManager) => {
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
    render: (row: BusinessManager) =>
      new Date(row.createdAt).toLocaleDateString(),
  },
];

// Row actions
const rowActions = (row: BusinessManager) => (
  <div className="flex space-x-2">
    <Link
      href={`/users/business-managers/${row.id}`}
      className="text-blue-600 hover:text-blue-800"
    >
      <FiEye title="View Details" />
    </Link>
    <button className="text-green-600 hover:text-green-800 cursor-pointer">
      <FiEdit title="Edit Manager" />
    </button>
    <button className="text-red-600 hover:text-red-800 cursor-pointer">
      <FiTrash2 title="Disable/Delete Manager" />
    </button>
  </div>
);

const BusinessManagersPage = () => {
  return (
    <AdminPageWrapper
      pageTitle="Business Managers"
      breadcrumbs={[
        { label: "Dashboard", path: "/super-admin-dashboard" },
        { label: "Users Management" },
        { label: "Business Managers" },
      ]}
      actions={[
        { label: "Add Business Manager", icon: <FiPlus /> },
        { label: "Export", icon: <FiDownload /> },
      ]}
    >
      <CommonTable
        columns={columns}
        data={businessManagers}
        maxHeight="500px"
        actions={rowActions}
      />
    </AdminPageWrapper>
  );
};

export default BusinessManagersPage;
