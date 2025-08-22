import Button from "../buttons/Button";
import CustomInput from "../form/CustomInput";

const PoliticianFilter = () => {
  return (
    <div className="mb-6 bg-white border border-gray-200 rounded-lg shadow-sm p-4">
      <form className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Search by Name */}
        <CustomInput placeholder="Search by Person / Leader Name" />

        {/* Search by Location */}
        <CustomInput placeholder="Search by Location / City / District" />

        {/* Search by Post / Party */}
        <CustomInput placeholder="Search by Post / Party like MLA / MP / Pradhan / Sarpanch" />

        {/* Search Button */}
        <Button />
      </form>
    </div>
  );
};

export default PoliticianFilter;
