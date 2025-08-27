import Link from "next/link";
import { FiDownload, FiEdit, FiEye, FiPlus, FiTrash2 } from "react-icons/fi";
import CommonTable, {
  Column,
} from "@/app/shared/components/admin/ui/tables/CommonTable";
import AdminPageWrapper from "@/app/shared/components/admin/ui/wrapper/AdminPageWrapper";
import { Metadata } from "next";

// Metadata
export const metadata: Metadata = {
  title: "Editors - Admin Dashboard | Aapki Awaz",
  description:
    "Manage editors in the admin dashboard of Aapki Awaz. View, edit, disable, or manage assigned sections for each editor.",
};

// Type for Editor
interface Editor {
  id: number;
  name: string;
  email: string;
  mobile: string;
  assignedSections: string[];
  status: "Active" | "Pending" | "Inactive";
  createdAt: string;
}

// Sample data
const editors: Editor[] = [
  {
    id: 301,
    name: "Sarah Johnson",
    email: "sarah.johnson@example.com",
    mobile: "+1 555-2233",
    assignedSections: ["Politics", "Economy"],
    status: "Active",
    createdAt: "2023-06-12",
  },
  {
    id: 302,
    name: "Mark Thompson",
    email: "mark.thompson@example.com",
    mobile: "+1 555-3344",
    assignedSections: ["Technology", "Science"],
    status: "Pending",
    createdAt: "2024-01-20",
  },
  {
    id: 303,
    name: "Emily Davis",
    email: "emily.davis@example.com",
    mobile: "+44 20 7946 5678",
    assignedSections: ["Health", "Lifestyle"],
    status: "Inactive",
    createdAt: "2023-09-05",
  },
  {
    id: 304,
    name: "James Wilson",
    email: "james.wilson@example.com",
    mobile: "+61 2 9876 4321",
    assignedSections: ["Business", "Sports"],
    status: "Active",
    createdAt: "2024-02-28",
  },
];

// Table columns
const columns: Column<Editor>[] = [
  {
    key: "name",
    label: "Editor Name",
    render: (row: Editor) => (
      <Link
        href={`/users/editors/${row.id}`}
        className="text-blue-600 hover:underline"
      >
        {row.name}
      </Link>
    ),
  },
  { key: "email", label: "Email" },
  { key: "mobile", label: "Mobile Number" },
  {
    key: "assignedSections",
    label: "Assigned Sections",
    render: (row: Editor) => row.assignedSections.join(", "),
  },
  {
    key: "status",
    label: "Status",
    render: (row: Editor) => {
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
    render: (row: Editor) => new Date(row.createdAt).toLocaleDateString(),
  },
];

// Row actions
const rowActions = (row: Editor) => (
  <div className="flex space-x-2">
    <Link
      href={`/users/editors/${row.id}`}
      className="text-blue-600 hover:text-blue-800"
    >
      <FiEye title="View Details" />
    </Link>
    <button className="text-green-600 hover:text-green-800 cursor-pointer">
      <FiEdit title="Edit Editor" />
    </button>
    <button className="text-red-600 hover:text-red-800 cursor-pointer">
      <FiTrash2 title="Disable/Delete Editor" />
    </button>
  </div>
);

const EditorsPage = () => {
  return (
    <AdminPageWrapper
      pageTitle="Editors"
      breadcrumbs={[
        { label: "Dashboard", path: "/super-admin-dashboard" },
        { label: "Users Management" },
        { label: "Editors" },
      ]}
      actions={[
        { label: "Add Editor", icon: <FiPlus /> },
        { label: "Export", icon: <FiDownload /> },
      ]}
    >
      <CommonTable
        columns={columns}
        data={editors}
        maxHeight="500px"
        actions={rowActions}
      />
    </AdminPageWrapper>
  );
};

export default EditorsPage;
