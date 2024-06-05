type ButtonProps = {
  children?: string;
  className?: string;
  onClick?: () => void;
  white?: boolean;
  border?: boolean;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
};

const Button = ({
  children,
  className = "",
  onClick,
  white = false,
  border,
  type = "button",
  disabled,
}: ButtonProps) => {
  const classes = `button relative inline-flex items-center justify-center w-[12.5rem] h-[3.125rem] cursor-pointer hover:bg-color-1 hover:text-color-4
    ${className} ${
      white ? "bg-color-1 text-color-4" : "bg-color-4  text-color-1 "
    } ${border ? "border border-color-4 hover:border-2" : "border-none"} ${disabled ? "bg-color-4/60 cursor-not-allowed" : ""} `;

  const spanClass = `relative z-10`;

  return (
    <button
      disabled={disabled}
      type={type}
      className={classes}
      onClick={onClick}
    >
      <span className={spanClass}>{children}</span>
    </button>
  );
};

export default Button;
