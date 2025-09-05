// components/Button.jsx
const Button = ({ bgColor = "bg-brand-50", textColor = "text-white", children,className = ""  }) => {
  return (
    <button
      className={`${bgColor} ${textColor} px-4 py-2 rounded-full font-semibold font-manrope hover:opacity-90 transition cursor-pointer ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
