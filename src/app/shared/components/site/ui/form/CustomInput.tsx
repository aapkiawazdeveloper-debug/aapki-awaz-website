import { ReactNode } from "react";

interface CustomInputProps {
  id?: string;
  label?: string;
  placeholder?: string;
  icon?: ReactNode; // optional icon
}

const CustomInput: React.FC<CustomInputProps> = ({
  id = "input",
  label = "",
  placeholder = "",
  icon,
}) => {
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
          type="text"
          id={id}
          placeholder={placeholder}
          className={`border border-[#ccc] focus:border-[#ccc] focus:ring-0 rounded-sm text-[#555] px-4 py-1 h-[34px] w-full outline-none placeholder:text-xs ${
            icon && "pl-9"
          }`}
        />
      </div>
    </div>
  );
};

export default CustomInput;
