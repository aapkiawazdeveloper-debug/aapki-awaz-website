import Link from "next/link";
import { FiDownload, FiEdit, FiEye, FiPlus, FiTrash2 } from "react-icons/fi";
import CommonTable, {
  Column,
} from "@/app/shared/components/admin/ui/tables/CommonTable";
import AdminPageWrapper from "@/app/shared/components/admin/ui/wrapper/AdminPageWrapper";
import { Metadata } from "next";

// Metadata
export const metadata: Metadata = {
  title: "Franchises - Admin Dashboard | Aapki Awaz",
  description:
    "Manage franchises in the admin dashboard of Aapki Awaz. View, edit, disable, or manage each franchise.",
};

// Type for Franchise
interface Franchise {
  id: number;
  name: string;
  owner: string;
  email: string;
  mobile: string;
  city: string;
  state: string;
  country: string;
  status: "Active" | "Pending" | "Inactive";
  createdAt: string;
}

// Sample data
const franchises: Franchise[] = [
  {
    id: 101,
    name: "Sunshine Mart",
    owner: "Alice Johnson",
    email: "alice.johnson@sunshinemart.com",
    mobile: "+1 555-1122",
    city: "Los Angeles",
    state: "California",
    country: "USA",
    status: "Active",
    createdAt: "2023-05-15",
  },
  {
    id: 102,
    name: "Greenfield Grocers",
    owner: "Bob Smith",
    email: "bob.smith@greenfield.com",
    mobile: "+1 555-3344",
    city: "Chicago",
    state: "Illinois",
    country: "USA",
    status: "Pending",
    createdAt: "2024-02-10",
  },
  {
    id: 103,
    name: "Bright Foods",
    owner: "Clara Lee",
    email: "clara.lee@brightfoods.com",
    mobile: "+44 20 7946 1234",
    city: "London",
    state: "Greater London",
    country: "UK",
    status: "Inactive",
    createdAt: "2023-11-20",
  },
  {
    id: 104,
    name: "FreshMart",
    owner: "David Kim",
    email: "david.kim@freshmart.com",
    mobile: "+82 10-1234-5678",
    city: "Seoul",
    state: "Seoul",
    country: "South Korea",
    status: "Active",
    createdAt: "2024-01-05",
  },
  {
    id: 105,
    name: "Tasty Bites",
    owner: "Emma Thompson",
    email: "emma.thompson@tastybites.com",
    mobile: "+61 2 9876 5432",
    city: "Sydney",
    state: "New South Wales",
    country: "Australia",
    status: "Active",
    createdAt: "2023-08-30",
  },
];

// Table columns
const columns: Column<Franchise>[] = [
  {
    key: "name",
    label: "Franchise Name",
    render: (row: Franchise) => (
      <Link
        href={`/users/franchise/${row.id}`}
        className="text-blue-600 hover:underline"
      >
        {row.name}
      </Link>
    ),
  },
  { key: "owner", label: "Owner" },
  { key: "email", label: "Email" },
  { key: "mobile", label: "Mobile Number" },
  {
    key: "city",
    label: "Location",
    render: (row: Franchise) => `${row.city}, ${row.state}, ${row.country}`,
  },
  {
    key: "status",
    label: "Status",
    render: (row: Franchise) => {
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
    render: (row: Franchise) => new Date(row.createdAt).toLocaleDateString(),
  },
];

// Row actions
const rowActions = (row: Franchise) => (
  <div className="flex space-x-2">
    <Link
      href={`/users/franchise/${row.id}`}
      className="text-blue-600 hover:text-blue-800"
    >
      <FiEye title="View Details" />
    </Link>
    <button className="text-green-600 hover:text-green-800 cursor-pointer">
      <FiEdit title="Edit Franchise" />
    </button>
    <button className="text-red-600 hover:text-red-800 cursor-pointer">
      <FiTrash2 title="Disable/Delete Franchise" />
    </button>
  </div>
);

const FranchisePage = () => {
  return (
    <AdminPageWrapper
      pageTitle="Franchises"
      breadcrumbs={[
        { label: "Dashboard", path: "/super-admin-dashboard" },
        { label: "Users Management" },
        { label: "Franchises" },
      ]}
      actions={[
        { label: "Add Franchise", icon: <FiPlus /> },
        { label: "Export", icon: <FiDownload /> },
      ]}
    >
      <CommonTable
        columns={columns}
        data={franchises}
        maxHeight="500px"
        actions={rowActions}
      />
    </AdminPageWrapper>
  );
};

export default FranchisePage;
