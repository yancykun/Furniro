import { ReactNode } from "react";

type ButtonProps = {
  children?: ReactNode;
  className?: string;
  onClick?: () => void;
  white?: boolean;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
};

const Button = ({
  children,
  className = "",
  onClick,
  white = false,
  type = "button",
  disabled,
}: ButtonProps) => {
  const classes = `button relative inline-flex items-center justify-center w-[12.5rem] h-[3.125rem] cursor-pointer 
    ${className} ${
      white
        ? "bg-color-1 text-color-4 border border-color-4 hover:bg-color-4 hover:text-color-1"
        : "bg-color-4 text-color-1 border border-color-4 hover:bg-color-1 hover:text-color-4"
    } ${disabled ? "opacity-50 cursor-not-allowed" : ""}  `;

  const spanClass = `relative z-10 text-sm sm:text-base`;

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
