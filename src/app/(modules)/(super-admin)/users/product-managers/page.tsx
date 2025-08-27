import Link from "next/link";
import { FiDownload, FiEdit, FiEye, FiPlus, FiTrash2 } from "react-icons/fi";
import CommonTable, {
  Column,
} from "@/app/shared/components/admin/ui/tables/CommonTable";
import AdminPageWrapper from "@/app/shared/components/admin/ui/wrapper/AdminPageWrapper";
import { Metadata } from "next";

// Metadata
export const metadata: Metadata = {
  title: "Product Managers - Admin Dashboard | Aapki Awaz",
  description:
    "Manage product managers in the admin dashboard of Aapki Awaz. View, edit, disable, or manage assigned product categories for each manager.",
};

// Type for Product Manager
interface ProductManager {
  id: number;
  name: string;
  email: string;
  mobile: string;
  assignedCategories: string[];
  status: "Active" | "Pending" | "Inactive";
  createdAt: string;
}

// Sample data
const productManagers: ProductManager[] = [
  {
    id: 601,
    name: "Emma Watson",
    email: "emma.watson@example.com",
    mobile: "+1 555-1010",
    assignedCategories: ["Electronics", "Home Appliances"],
    status: "Active",
    createdAt: "2023-06-18",
  },
  {
    id: 602,
    name: "Liam Smith",
    email: "liam.smith@example.com",
    mobile: "+1 555-2020",
    assignedCategories: ["Books", "Stationery"],
    status: "Pending",
    createdAt: "2024-02-10",
  },
  {
    id: 603,
    name: "Olivia Brown",
    email: "olivia.brown@example.com",
    mobile: "+44 20 7946 3456",
    assignedCategories: ["Fashion", "Beauty"],
    status: "Inactive",
    createdAt: "2023-09-22",
  },
  {
    id: 604,
    name: "Noah Davis",
    email: "noah.davis@example.com",
    mobile: "+61 2 9876 2345",
    assignedCategories: ["Sports", "Outdoors"],
    status: "Active",
    createdAt: "2024-03-12",
  },
];

// Table columns
const columns: Column<ProductManager>[] = [
  {
    key: "name",
    label: "Product Manager Name",
    render: (row: ProductManager) => (
      <Link
        href={`/users/product-managers/${row.id}`}
        className="text-blue-600 hover:underline"
      >
        {row.name}
      </Link>
    ),
  },
  { key: "email", label: "Email" },
  { key: "mobile", label: "Mobile Number" },
  {
    key: "assignedCategories",
    label: "Assigned Categories",
    render: (row: ProductManager) => row.assignedCategories.join(", "),
  },
  {
    key: "status",
    label: "Status",
    render: (row: ProductManager) => {
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
    render: (row: ProductManager) =>
      new Date(row.createdAt).toLocaleDateString(),
  },
];

// Row actions
const rowActions = (row: ProductManager) => (
  <div className="flex space-x-2">
    <Link
      href={`/users/product-managers/${row.id}`}
      className="text-blue-600 hover:text-blue-800"
    >
      <FiEye title="View Details" />
    </Link>
    <button className="text-green-600 hover:text-green-800 cursor-pointer">
      <FiEdit title="Edit Product Manager" />
    </button>
    <button className="text-red-600 hover:text-red-800 cursor-pointer">
      <FiTrash2 title="Disable/Delete Product Manager" />
    </button>
  </div>
);

const ProductManagersPage = () => {
  return (
    <AdminPageWrapper
      pageTitle="Product Managers"
      breadcrumbs={[
        { label: "Dashboard", path: "/super-admin-dashboard" },
        { label: "Users Management" },
        { label: "Product Managers" },
      ]}
      actions={[
        { label: "Add Product Manager", icon: <FiPlus /> },
        { label: "Export", icon: <FiDownload /> },
      ]}
    >
      <CommonTable
        columns={columns}
        data={productManagers}
        maxHeight="500px"
        actions={rowActions}
      />
    </AdminPageWrapper>
  );
};

export default ProductManagersPage;
