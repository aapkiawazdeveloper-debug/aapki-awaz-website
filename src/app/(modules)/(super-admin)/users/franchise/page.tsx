import Breadcrumbs from "@/app/shared/components/admin/Breadcrumbs";
import PageSubHeader from "@/app/shared/components/admin/PageSubHeader";
import CommonTable, {
  Column,
} from "@/app/shared/components/admin/ui/tables/CommonTable";
import AdminPageWrapper from "@/app/shared/components/admin/ui/wrapper/AdminPageWrapper";
import Link from "next/link";
import {
  FiDownload,
  FiEdit,
  FiEye,
  FiPlus,
  FiTrash2,
  FiUsers,
} from "react-icons/fi";

export const metadata = {
  title: "Franchise Users - Admin Dashboard | Aapki Awaz",
  description:
    "Manage franchise users in the admin dashboard of Aapki Awaz. View, edit, disable, or manage assigned users for each franchise.",
};

interface FranchiseUser {
  id: number;
  name: string;
  email: string;
  location: string;
  status: "Active" | "Pending" | "Inactive";
  createdAt: string;
}

const columns: Column<FranchiseUser>[] = [
  {
    key: "name",
    label: "Franchise Name",
    render: (row: FranchiseUser) => (
      <Link
        href={`/users/franchise/${row.id}`}
        className="text-blue-600 hover:underline"
      >
        {row.name}
      </Link>
    ),
  },
  { key: "email", label: "Email / Contact" },
  { key: "location", label: "Location / Region" },
  {
    key: "status",
    label: "Status",
    render: (row: FranchiseUser) => {
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
    label: "Created Date",
    render: (row: FranchiseUser) =>
      new Date(row.createdAt).toLocaleDateString(),
  },
];

// Sample data
const franchiseUsers: FranchiseUser[] = [
  {
    id: 101,
    name: "John Doe Franchise",
    email: "contact@johndoe.com",
    location: "New York, USA",
    status: "Active",
    createdAt: "2024-02-15",
  },
  {
    id: 102,
    name: "Smith Enterprises",
    email: "info@smithenterprises.com",
    location: "California, USA",
    status: "Pending",
    createdAt: "2024-05-10",
  },
  {
    id: 103,
    name: "Amit Kumar Franchise",
    email: "amit@franchise.in",
    location: "Delhi, India",
    status: "Inactive",
    createdAt: "2023-12-01",
  },
];

// Row actions
const actions = (row: FranchiseUser) => (
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
    <button className="text-purple-600 hover:text-purple-800 cursor-pointer">
      <FiUsers title="Manage Assigned Users" />
    </button>
  </div>
);

const UserFranchisePage = () => {
  return (
    <>
      <AdminPageWrapper
        pageTitle="Franchise Users"
        breadcrumbs={[
          { label: "Dashboard", path: "/super-admin-dashboard" },
          { label: "Users Management" },
          { label: "Franchise Users" },
        ]}
        actions={[
          { label: "Add Franchise User", icon: <FiPlus /> },
          { label: "Export", icon: <FiDownload /> },
        ]}
      >
        <CommonTable
          columns={columns}
          data={franchiseUsers}
          maxHeight="500px"
          actions={actions}
        />
      </AdminPageWrapper>
    </>
  );
};

export default UserFranchisePage;
