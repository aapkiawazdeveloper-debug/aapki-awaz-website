const Button: React.FC<{
  title?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}> = ({ title = "Search", onClick, type = "button" }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md font-medium cursor-pointer w-full transition"
    >
      {title}
    </button>
  );
};

export default Button;
