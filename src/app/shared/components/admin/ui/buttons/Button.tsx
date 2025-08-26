interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  icon?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children, icon, ...props }) => {
  return (
    <button
      type="button"
      className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-600 text-white rounded-sm hover:bg-blue-700 transition-colors duration-200 cursor-pointer"
      {...props}
    >
      {icon && <span className="flex items-center">{icon}</span>}
      {children}
    </button>
  );
};

export default Button;
