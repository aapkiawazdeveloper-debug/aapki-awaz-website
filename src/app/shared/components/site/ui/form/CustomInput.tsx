const CustomInput: React.FC<{ label?: string }> = ({ label = "" }) => {
  return (
    <div className="w-full">
      {label && (
        <label
          htmlFor="name"
          className="block text-sm font-medium text-black mb-1"
        >
          {label}
        </label>
      )}
      <input
        type="text"
        id="name"
        className="border border-[#ccc] focus:border-[#ccc] focus:ring-0 rounded-sm text-[#555] px-4 py-1 h-[34px] w-full outline-none"
      />
    </div>
  );
};

export default CustomInput;
