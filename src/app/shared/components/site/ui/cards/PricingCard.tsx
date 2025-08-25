const PricingCard: React.FC<{
  name: string;
  options: { label: string; price: string; duration: string }[];
  profileView: number;
  color: string;
  badgeColor: string;
  badgeTextColor: string;
  selected?: string;
  onChange: (packageName: string, duration: string, price: string) => void;
}> = ({
  name,
  options,
  profileView,
  color,
  badgeColor,
  badgeTextColor,
  selected,
  onChange,
}) => {
  return (
    <div
      className="p-6 rounded-2xl shadow-lg text-white relative overflow-hidden"
      style={{ backgroundColor: color }}
    >
      <h2 className="text-2xl font-bold mb-4">{name}</h2>

      <div className="flex flex-col gap-3">
        {options.map((opt) => (
          <label
            key={opt.duration}
            className="flex items-center gap-2 cursor-pointer"
          >
            <input
              type="radio"
              name={name}
              value={opt.duration}
              checked={selected === opt.duration}
              onChange={() => onChange(name, opt.duration, opt.price)}
              className="accent-white"
            />
            <span className="text-yellow-300 font-semibold">{opt.price}</span> -{" "}
            {opt.duration}
          </label>
        ))}
      </div>

      <p className="mt-6 text-base text-center">Profile View: {profileView}</p>

      {/* dynamic badge color */}
      <div className="absolute top-0 right-0 overflow-hidden w-[143px] h-[130px]">
        <div
          className="font-semibold font-poppins text-base transform rotate-45 origin-top-right absolute top-[20px] left-[30px] w-[200] h-[120px] flex items-center justify-center text-center pt-[60px] pl-[50px] shadow-md uppercase"
          style={{ backgroundColor: badgeColor, color: badgeTextColor }}
        >
          new
        </div>
      </div>
    </div>
  );
};

export default PricingCard;
