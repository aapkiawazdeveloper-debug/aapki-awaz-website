const CustomTextarea: React.FC<{
  label?: string;
  id: string;
  rows?: number;
  placeholder?: string;
}> = ({ label, id, rows = 4, placeholder }) => {
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
      <textarea
        id={id}
        rows={rows}
        placeholder={placeholder}
        className="border border-[#ccc] focus:border-[#ccc] focus:ring-0 rounded-sm text-[#555] px-4 py-1 w-full outline-none"
      />
    </div>
  );
};

export default CustomTextarea;
