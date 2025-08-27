import Link from "next/link";
import { FiDownload, FiEdit, FiEye, FiPlus, FiTrash2 } from "react-icons/fi";
import CommonTable, {
  Column,
} from "@/app/shared/components/admin/ui/tables/CommonTable";
import AdminPageWrapper from "@/app/shared/components/admin/ui/wrapper/AdminPageWrapper";
import { Metadata } from "next";

// Metadata
export const metadata: Metadata = {
  title: "All News - Admin Dashboard | Aapki Awaz",
  description:
    "Manage news content in the admin dashboard of Aapki Awaz. View, edit, publish, or delete news articles.",
};

// Type for News
interface NewsArticle {
  id: number;
  title: string;
  category: string;
  author: string;
  status: "Published" | "Draft" | "Archived";
  publishedAt: string;
}

// Sample data
const newsArticles: NewsArticle[] = [
  {
    id: 901,
    title: "Global Economy Trends 2025",
    category: "Economy",
    author: "John Carter",
    status: "Published",
    publishedAt: "2024-08-01",
  },
  {
    id: 902,
    title: "Tech Innovations in AI",
    category: "Technology",
    author: "Lisa Green",
    status: "Draft",
    publishedAt: "2024-08-15",
  },
  {
    id: 903,
    title: "Health Tips for Summer",
    category: "Health",
    author: "Michael Brown",
    status: "Published",
    publishedAt: "2024-07-20",
  },
  {
    id: 904,
    title: "Local Sports Updates",
    category: "Sports",
    author: "Sophia Lee",
    status: "Archived",
    publishedAt: "2024-06-30",
  },
  {
    id: 905,
    title: "Stock Market Analysis",
    category: "Economy",
    author: "John Carter",
    status: "Published",
    publishedAt: "2024-08-05",
  },
  {
    id: 906,
    title: "New Smartphone Launches",
    category: "Technology",
    author: "Lisa Green",
    status: "Published",
    publishedAt: "2024-07-28",
  },
  {
    id: 907,
    title: "Mental Health Awareness",
    category: "Health",
    author: "Emily Davis",
    status: "Draft",
    publishedAt: "2024-07-10",
  },
  {
    id: 908,
    title: "Champions League Highlights",
    category: "Sports",
    author: "Sophia Lee",
    status: "Published",
    publishedAt: "2024-08-02",
  },
  {
    id: 909,
    title: "Global Warming Effects",
    category: "Environment",
    author: "Michael Brown",
    status: "Published",
    publishedAt: "2024-06-15",
  },
  {
    id: 910,
    title: "Renewable Energy Advances",
    category: "Environment",
    author: "Emily Davis",
    status: "Draft",
    publishedAt: "2024-07-22",
  },
  {
    id: 911,
    title: "Elections 2024 Updates",
    category: "Politics",
    author: "John Carter",
    status: "Published",
    publishedAt: "2024-08-10",
  },
  {
    id: 912,
    title: "Budget 2024 Analysis",
    category: "Economy",
    author: "Lisa Green",
    status: "Published",
    publishedAt: "2024-07-18",
  },
  {
    id: 913,
    title: "AI in Healthcare",
    category: "Technology",
    author: "Michael Brown",
    status: "Draft",
    publishedAt: "2024-07-25",
  },
  {
    id: 914,
    title: "Nutrition and Fitness Tips",
    category: "Health",
    author: "Emily Davis",
    status: "Published",
    publishedAt: "2024-06-20",
  },
  {
    id: 915,
    title: "Olympics 2024 Preview",
    category: "Sports",
    author: "Sophia Lee",
    status: "Published",
    publishedAt: "2024-08-05",
  },
  {
    id: 916,
    title: "Climate Change Reports",
    category: "Environment",
    author: "John Carter",
    status: "Archived",
    publishedAt: "2024-06-30",
  },
  {
    id: 917,
    title: "Tech Startups to Watch",
    category: "Technology",
    author: "Lisa Green",
    status: "Published",
    publishedAt: "2024-07-28",
  },
  {
    id: 918,
    title: "Healthcare Policy Updates",
    category: "Health",
    author: "Michael Brown",
    status: "Published",
    publishedAt: "2024-07-12",
  },
  {
    id: 919,
    title: "Football League Results",
    category: "Sports",
    author: "Sophia Lee",
    status: "Draft",
    publishedAt: "2024-08-03",
  },
  {
    id: 920,
    title: "Environmental Conservation Tips",
    category: "Environment",
    author: "Emily Davis",
    status: "Published",
    publishedAt: "2024-07-15",
  },
  {
    id: 921,
    title: "Parliament Session Summary",
    category: "Politics",
    author: "John Carter",
    status: "Published",
    publishedAt: "2024-08-07",
  },
  {
    id: 922,
    title: "Investment Strategies 2024",
    category: "Economy",
    author: "Lisa Green",
    status: "Draft",
    publishedAt: "2024-07-20",
  },
  {
    id: 923,
    title: "AI Robotics Breakthroughs",
    category: "Technology",
    author: "Michael Brown",
    status: "Published",
    publishedAt: "2024-08-01",
  },
  {
    id: 924,
    title: "Fitness Trends for 2024",
    category: "Health",
    author: "Emily Davis",
    status: "Draft",
    publishedAt: "2024-07-28",
  },
  {
    id: 925,
    title: "Basketball League Highlights",
    category: "Sports",
    author: "Sophia Lee",
    status: "Published",
    publishedAt: "2024-08-02",
  },
  {
    id: 926,
    title: "Sustainable Energy News",
    category: "Environment",
    author: "John Carter",
    status: "Published",
    publishedAt: "2024-07-10",
  },
  {
    id: 927,
    title: "Tech Conference 2024",
    category: "Technology",
    author: "Lisa Green",
    status: "Draft",
    publishedAt: "2024-08-05",
  },
  {
    id: 928,
    title: "Mental Wellness Programs",
    category: "Health",
    author: "Emily Davis",
    status: "Published",
    publishedAt: "2024-07-18",
  },
  {
    id: 929,
    title: "Soccer World Cup Updates",
    category: "Sports",
    author: "Sophia Lee",
    status: "Published",
    publishedAt: "2024-08-08",
  },
  {
    id: 930,
    title: "Climate Policy News",
    category: "Environment",
    author: "Michael Brown",
    status: "Draft",
    publishedAt: "2024-07-22",
  },
];

// Table columns
const columns: Column<NewsArticle>[] = [
  {
    key: "title",
    label: "Title",
    render: (row: NewsArticle) => (
      <Link
        href={`/content/news/${row.id}`}
        className="text-blue-600 hover:underline"
      >
        {row.title}
      </Link>
    ),
  },
  { key: "category", label: "Category" },
  { key: "author", label: "Author" },
  {
    key: "status",
    label: "Status",
    render: (row: NewsArticle) => {
      let colorClass = "bg-gray-100 text-gray-800";
      if (row.status === "Published")
        colorClass = "bg-green-100 text-green-800";
      else if (row.status === "Draft")
        colorClass = "bg-yellow-100 text-yellow-800";
      else if (row.status === "Archived")
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
    key: "publishedAt",
    label: "Published Date",
    render: (row: NewsArticle) => {
      const date = new Date(row.publishedAt);
      const options: Intl.DateTimeFormatOptions = {
        day: "numeric",
        month: "long",
        year: "numeric",
      };
      return date.toLocaleDateString("en-US", options); // Example: 1 August, 2025
    },
  },
];

// Row actions
const rowActions = (row: NewsArticle) => (
  <div className="flex space-x-2">
    <Link
      href={`/content/news/${row.id}`}
      className="text-blue-600 hover:text-blue-800"
    >
      <FiEye title="View Details" />
    </Link>
    <button className="text-green-600 hover:text-green-800 cursor-pointer">
      <FiEdit title="Edit News" />
    </button>
    <button className="text-red-600 hover:text-red-800 cursor-pointer">
      <FiTrash2 title="Delete News" />
    </button>
  </div>
);

const NewsPage = () => {
  return (
    <AdminPageWrapper
      pageTitle="All News"
      breadcrumbs={[
        { label: "Dashboard", path: "/super-admin-dashboard" },
        { label: "Content Management" },
        { label: "All News" },
      ]}
      actions={[
        { label: "Add News", icon: <FiPlus /> },
        { label: "Export", icon: <FiDownload /> },
      ]}
    >
      <CommonTable
        columns={columns}
        data={newsArticles}
        maxHeight="670px"
        actions={rowActions}
      />
    </AdminPageWrapper>
  );
};

export default NewsPage;
