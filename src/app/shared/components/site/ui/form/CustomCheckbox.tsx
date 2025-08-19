const CustomCheckbox: React.FC<{
  id: string;
  label: React.ReactNode;
  checked?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}> = ({ id, label, checked, onChange }) => {
  return (
    <div className="flex items-start gap-2 cursor-pointer">
      <input
        type="checkbox"
        id={id}
        checked={checked}
        onChange={onChange}
        className="mt-1 h-4 w-4 border border-gray-400 rounded-sm text-[#337ab7] focus:ring-[#337ab7]"
      />
      <label htmlFor={id} className="text-sm text-gray-700 leading-5">
        {label}
      </label>
    </div>
  );
};

export default CustomCheckbox;
