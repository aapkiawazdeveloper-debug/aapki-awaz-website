const Button: React.FC<{
  title?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}> = ({ title = "Search", onClick, type = "button" }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className="block px-4 py-1 text-center text-sm font-medium rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition cursor-pointer"
    >
      {title}
    </button>
  );
};

export default Button;
