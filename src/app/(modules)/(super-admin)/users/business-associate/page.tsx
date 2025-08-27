import Link from "next/link";
import { FiDownload, FiEdit, FiEye, FiPlus, FiTrash2 } from "react-icons/fi";
import CommonTable, {
  Column,
} from "@/app/shared/components/admin/ui/tables/CommonTable";
import AdminPageWrapper from "@/app/shared/components/admin/ui/wrapper/AdminPageWrapper";
import { Metadata } from "next";

// Metadata
export const metadata:Metadata = {
  title: "Business Associates - Admin Dashboard | Aapki Awaz",
  description:
    "Manage business associates in the admin dashboard of Aapki Awaz. View, edit, disable, or manage assigned users for each business associate.",
};

// Type for Business Associate
interface BusinessAssociate {
  id: number;
  name: string;
  email: string;
  mobile: string;
  region: string;
  status: "Active" | "Pending" | "Inactive";
  createdAt: string;
}

// Table columns
const columns: Column<BusinessAssociate>[] = [
  {
    key: "name",
    label: "Business Associate Name",
    render: (row: BusinessAssociate) => (
      <Link
        href={`/users/business-associate/${row.id}`}
        className="text-blue-600 hover:underline"
      >
        {row.name}
      </Link>
    ),
  },
  { key: "email", label: "Email" },
  { key: "mobile", label: "Mobile Number" },
  { key: "region", label: "Region" },
  {
    key: "status",
    label: "Status",
    render: (row: BusinessAssociate) => {
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
    render: (row: BusinessAssociate) =>
      new Date(row.createdAt).toLocaleDateString(),
  },
];

// Sample data
const businessAssociates: BusinessAssociate[] = [
  {
    id: 201,
    name: "Global Traders",
    email: "contact@globaltraders.com",
    mobile: "+1 555-1234",
    region: "New York, USA",
    status: "Active",
    createdAt: "2024-01-20",
  },
  {
    id: 202,
    name: "Tech Solutions",
    email: "info@techsolutions.com",
    mobile: "+1 555-5678",
    region: "California, USA",
    status: "Pending",
    createdAt: "2024-03-15",
  },
  {
    id: 203,
    name: "Bright Enterprises",
    email: "hello@brightenterprises.com",
    mobile: "+44 20 7946 0958",
    region: "London, UK",
    status: "Inactive",
    createdAt: "2023-11-05",
  },
];

// Row actions
const actions = (row: BusinessAssociate) => (
  <div className="flex space-x-2">
    <Link
      href={`/users/business-associate/${row.id}`}
      className="text-blue-600 hover:text-blue-800"
    >
      <FiEye title="View Details" />
    </Link>
    <button className="text-green-600 hover:text-green-800 cursor-pointer">
      <FiEdit title="Edit Business Associate" />
    </button>
    <button className="text-red-600 hover:text-red-800 cursor-pointer">
      <FiTrash2 title="Disable/Delete Business Associate" />
    </button>
  </div>
);

const BusinessAssociatePage = () => {
  return (
    <AdminPageWrapper
      pageTitle="Business Associates"
      breadcrumbs={[
        { label: "Dashboard", path: "/super-admin-dashboard" },
        { label: "Users Management" },
        { label: "Business Associates" },
      ]}
      actions={[
        { label: "Add Business Associate", icon: <FiPlus /> },
        { label: "Export", icon: <FiDownload /> },
      ]}
    >
      <CommonTable
        columns={columns}
        data={businessAssociates}
        maxHeight="500px"
        actions={actions}
      />
    </AdminPageWrapper>
  );
};

export default BusinessAssociatePage;
