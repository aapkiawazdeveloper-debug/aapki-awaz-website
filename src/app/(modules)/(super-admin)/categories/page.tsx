import Breadcrumbs from "@/app/shared/components/admin/Breadcrumbs";
import CommonTable, {
  Column,
} from "@/app/shared/components/admin/ui/tables/CommonTable";
import { Category } from "@/app/shared/types/category";
import React from "react";
import { FiEdit, FiTrash2 } from "react-icons/fi";

export const metadata = {
  title: "Categories - Admin Dashboard | Aapki Awaz",
  description:
    "Manage news categories in the admin dashboard of Aapki Awaz. Add, edit, or delete categories.",
};

const breadcrumbItems = [
  { label: "Dashboard", path: "/admin" },
  { label: "Categories" },
];

const categories: Category[] = [
  {
    id: 1,
    name: "Politics",
    description:
      "Coverage of political events, leaders, and legislative developments.",
    status: "Active",
  },
  {
    id: 2,
    name: "Business",
    description:
      "Updates on corporate activities, product launches, and industry trends.",
    status: "Inactive",
  },
  {
    id: 3,
    name: "Safety & Industrial Equipment",
    description:
      "Information on safety gear, industrial equipment, and related businesses.",
    status: "Active",
  },
  {
    id: 4,
    name: "Sports",
    description: "Highlights of achievements by individuals in various sports.",
    status: "Active",
  },
  {
    id: 5,
    name: "Education & Employment",
    description:
      "Updates on educational institutions, job opportunities, and recruitment processes.",
    status: "Inactive",
  },
  {
    id: 6,
    name: "Community & Social Welfare",
    description:
      "News related to community development, social initiatives, and welfare programs.",
    status: "Active",
  },
];

const columns: Column<Category>[] = [
  { key: "name", label: "Name" },
  { key: "description", label: "Description" },
  {
    key: "status",
    label: "Status",
    render: (row: Category) => (
      <span
        className={`inline-block px-3 py-1 text-xs font-medium rounded-full ${
          row.status === "Active"
            ? "bg-green-100 text-green-800"
            : "bg-red-100 text-red-800"
        }`}
      >
        {row.status}
      </span>
    ),
  },
];

const actions = (row: Category) => (
  <div className="flex space-x-2">
    <button className="text-blue-600 hover:text-blue-800">
      <FiEdit />
    </button>
    <button className="text-red-600 hover:text-red-800">
      <FiTrash2 />
    </button>
  </div>
);

const CategoriesPage = () => {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} pageTitle="Categories" />

      <CommonTable
        columns={columns}
        data={categories}
        maxHeight="500px"
        actions={actions}
      />
    </>
  );
};

export default CategoriesPage;
