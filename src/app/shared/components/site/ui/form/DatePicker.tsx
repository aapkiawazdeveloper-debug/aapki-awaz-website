import { ReactNode } from "react";

const CustomDatePicker: React.FC<{
  id?: string;
  label?: string;
  icon?: ReactNode;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}> = ({ id = "date", label = "Select Date", icon, value, onChange }) => {
  return (
    <div className="w-full">
      {label && (
        <label
          htmlFor={id}
          className="block text-sm font-medium text-black mb-1"
        >
          {label}
        </label>
      )}

      <div className="relative">
        {icon && (
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">
            {icon}
          </span>
        )}
        <input
          type="date"
          id={id}
          value={value}
          onChange={onChange}
          className={`border border-[#ccc] focus:border-[#ccc] focus:ring-0 rounded-sm text-[#555] px-4 py-1 h-[34px] w-full outline-none text-sm ${
            icon && "pl-9"
          }`}
        />
      </div>
    </div>
  );
};

export default CustomDatePicker;
