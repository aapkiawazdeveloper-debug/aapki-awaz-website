import Link from "next/link";
import { HiChevronRight } from "react-icons/hi";

const Breadcrumbs: React.FC<{
  items: { label: string; path?: string }[];
  pageTitle: string;
}> = ({ items, pageTitle }) => {
  return (
    <div className="mb-6">
      {/* Page Title */}
      <h1 className="text-2xl font-semibold text-gray-800 mb-3">{pageTitle}</h1>

      {/* Breadcrumbs */}
      <nav className="flex items-center text-gray-500 text-sm">
        {items.map((item, index) => (
          <span key={index} className="flex items-center">
            {item.path ? (
              <Link
                href={item.path}
                className="hover:text-blue-600 transition-colors"
              >
                {item.label}
              </Link>
            ) : (
              <span className="text-gray-700 font-medium">{item.label}</span>
            )}
            {index < items.length - 1 && (
              <HiChevronRight className="w-4 h-4 mx-1 text-gray-400" />
            )}
          </span>
        ))}
      </nav>
    </div>
  );
};

export default Breadcrumbs;
