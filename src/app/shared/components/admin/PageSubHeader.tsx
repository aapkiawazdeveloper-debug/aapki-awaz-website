import { FiSearch } from "react-icons/fi";
import Button from "./ui/buttons/Button";

interface Action {
  label: string;
  icon?: React.ReactNode;
}

interface PageSubHeaderProps {
  actions: Action[];
}

const PageSubHeader: React.FC<PageSubHeaderProps> = ({ actions }) => {
  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mt-6 mb-6">
      {/* Search Box */}
      <div className="relative w-full md:w-1/3">
        <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          placeholder="Search ebooks..."
          className="pl-10 pr-4 border border-[#ccc] focus:border-[#ccc] focus:ring-0 rounded-sm text-[#555] px-4 py-1 w-full outline-none placeholder:text-sm undefined"
        />
      </div>

      {/* Actions */}
      <div className="flex gap-3">
        {actions.map((action, index) => (
          <Button key={index} icon={action.icon}>
            {action.label}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default PageSubHeader;
