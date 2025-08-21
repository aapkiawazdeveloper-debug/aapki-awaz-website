interface RadioOption {
    label: string;
    value: string;
}

const CustomRadioGroup: React.FC<{ label?: string; name: string; options: RadioOption[]; }> = ({ label, name, options }) => {
    return (
        <div>
            {label && <label className="block text-sm font-medium text-black mb-1">{label}</label>}
            <div className="flex items-center gap-6">
                {options.map((option) => (
                    <label key={option.value} className="flex items-center gap-2 text-sm text-[#555]">
                        <input type="radio" name={name} value={option.value} className="accent-[#337ab7]" />
                        {option.label}
                    </label>
                ))}
            </div>
        </div>
    );
};

export default CustomRadioGroup;
