type RadioProps = {
  label?: string;
  type?: string;
  className?: string;
  checked?: boolean;
  value?: string;
  handlePaymentMethod?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const Radio = ({
  type = "radio",
  className,
  checked,
  value,
  label,
  handlePaymentMethod,
}: RadioProps) => {
  return (
    <div className="flex flex-row-reverse gap-2">
      <label className="font-poppins font-medium">{label}</label>
      <input
        checked={checked}
        value={value}
        type={type}
        className={`${className}`}
        onChange={handlePaymentMethod}
      />
    </div>
  );
};

export default Radio;
