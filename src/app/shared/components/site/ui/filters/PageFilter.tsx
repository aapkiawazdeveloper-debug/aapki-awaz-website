import CustomInput from "../form/CustomInput";
import { FiSearch } from "react-icons/fi";

const PageFilter = () => {
  return (
    <div className="mb-4">
      <form className="flex items-center gap-2 sm:gap-4">
        <CustomInput />
        <button
          type="submit"
          className="flex items-center gap-2.5 px-3.5 sm:px-6 py-1.5 text-center text-sm font-medium rounded-sm bg-blue-600 text-white hover:bg-blue-700 transition cursor-pointer"
        >
          <FiSearch size={16} />
          <span>Search</span>
        </button>
      </form>
    </div>
  );
};

export default PageFilter;
