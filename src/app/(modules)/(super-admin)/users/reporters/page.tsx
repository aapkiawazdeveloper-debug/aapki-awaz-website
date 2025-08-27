import Link from "next/link";
import { FiDownload, FiEdit, FiEye, FiPlus, FiTrash2 } from "react-icons/fi";
import CommonTable, {
  Column,
} from "@/app/shared/components/admin/ui/tables/CommonTable";
import AdminPageWrapper from "@/app/shared/components/admin/ui/wrapper/AdminPageWrapper";
import { Metadata } from "next";

// Metadata
export const metadata: Metadata = {
  title: "Reporters - Admin Dashboard | Aapki Awaz",
  description:
    "Manage reporters in the admin dashboard of Aapki Awaz. View, edit, disable, or manage assigned beats for each reporter.",
};

// Type for Reporter
interface Reporter {
  id: number;
  name: string;
  email: string;
  mobile: string;
  assignedBeats: string[];
  status: "Active" | "Pending" | "Inactive";
  createdAt: string;
}

// Sample data
const reporters: Reporter[] = [
  {
    id: 401,
    name: "John Carter",
    email: "john.carter@example.com",
    mobile: "+1 555-7788",
    assignedBeats: ["New York", "Boston"],
    status: "Active",
    createdAt: "2023-07-12",
  },
  {
    id: 402,
    name: "Lisa Green",
    email: "lisa.green@example.com",
    mobile: "+1 555-8899",
    assignedBeats: ["California", "Nevada"],
    status: "Pending",
    createdAt: "2024-01-18",
  },
  {
    id: 403,
    name: "Michael Brown",
    email: "michael.brown@example.com",
    mobile: "+44 20 7946 6789",
    assignedBeats: ["London", "Manchester"],
    status: "Inactive",
    createdAt: "2023-10-05",
  },
  {
    id: 404,
    name: "Sophia Lee",
    email: "sophia.lee@example.com",
    mobile: "+61 2 9876 1234",
    assignedBeats: ["Sydney", "Melbourne"],
    status: "Active",
    createdAt: "2024-03-22",
  },
];

// Table columns
const columns: Column<Reporter>[] = [
  {
    key: "name",
    label: "Reporter Name",
    render: (row: Reporter) => (
      <Link
        href={`/users/reporters/${row.id}`}
        className="text-blue-600 hover:underline"
      >
        {row.name}
      </Link>
    ),
  },
  { key: "email", label: "Email" },
  { key: "mobile", label: "Mobile Number" },
  {
    key: "assignedBeats",
    label: "Assigned Beats",
    render: (row: Reporter) => row.assignedBeats.join(", "),
  },
  {
    key: "status",
    label: "Status",
    render: (row: Reporter) => {
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
    render: (row: Reporter) => new Date(row.createdAt).toLocaleDateString(),
  },
];

// Row actions
const rowActions = (row: Reporter) => (
  <div className="flex space-x-2">
    <Link
      href={`/users/reporters/${row.id}`}
      className="text-blue-600 hover:text-blue-800"
    >
      <FiEye title="View Details" />
    </Link>
    <button className="text-green-600 hover:text-green-800 cursor-pointer">
      <FiEdit title="Edit Reporter" />
    </button>
    <button className="text-red-600 hover:text-red-800 cursor-pointer">
      <FiTrash2 title="Disable/Delete Reporter" />
    </button>
  </div>
);

const ReportersPage = () => {
  return (
    <AdminPageWrapper
      pageTitle="Reporters"
      breadcrumbs={[
        { label: "Dashboard", path: "/super-admin-dashboard" },
        { label: "Users Management" },
        { label: "Reporters" },
      ]}
      actions={[
        { label: "Add Reporter", icon: <FiPlus /> },
        { label: "Export", icon: <FiDownload /> },
      ]}
    >
      <CommonTable
        columns={columns}
        data={reporters}
        maxHeight="500px"
        actions={rowActions}
      />
    </AdminPageWrapper>
  );
};

export default ReportersPage;
