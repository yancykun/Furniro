type LabeledInputProps = {
  label?: string;
  placeholder?: string;
  className?: string;
  type?: string;
  value?: string;
  checked?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const LabeledInput = ({
  label,
  placeholder,
  className,
  type = "text",
  value,
  checked,
  onChange,
}: LabeledInputProps) => {
  return (
    <div className="flex flex-col">
      <label className="mb-4 font-poppins font-medium">{label}</label>

      <input
        checked={checked}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        type={type}
        className={`mb-8 rounded-lg border border-color-6 px-4 font-poppins focus:border-2 focus:border-color-4 focus:outline-none sm:px-8 ${className} `}
      />
    </div>
  );
};

export default LabeledInput;
