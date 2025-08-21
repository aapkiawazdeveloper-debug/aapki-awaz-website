const Button: React.FC<{ title?: string }> = ({ title = "Search" }) => {
  return (
    <button
      type="button"
      className="bg-[#0000FF] text-white px-6 py-1 rounded-sm font-poppins font-medium cursor-pointer"
    >
      {title}
    </button>
  );
};

export default Button;
