type ButtonProps = {
    children?: string;
    className?: string;
    onClick?: () => void;
    white?: boolean;

    border?: boolean;
};

const Button = ({
    children,
    className = '',
    onClick,
    white = false,
    border,
}: ButtonProps) => {
    const classes = `button relative inline-flex items-center justify-center w-[12.5rem] h-[3.125rem] cursor-pointer
    ${className} ${
        white ? 'bg-color-1 text-color-4' : 'bg-color-4 text-color-1'
    } ${border ? 'border-2 border-color-4' : 'border-none'} `;

    const spanClass = `relative z-10`;

    return (
        <div className={classes} onClick={onClick}>
            <span className={spanClass}>{children}</span>
        </div>
    );
};

export default Button;
