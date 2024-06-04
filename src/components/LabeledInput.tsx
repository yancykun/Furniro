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
    <div
      className={`flex ${type === "radio" ? "flex-row-reverse gap-2" : "flex-col"}`}
    >
      {label && (
        <label
          className={`${type === "text" ? "mb-4" : "mb-0"} font-poppins font-medium`}
        >
          {label}
        </label>
      )}
      <input
        checked={checked}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        type={type}
        className={`rounded-lg border border-color-6 px-4 font-poppins focus:border-2 focus:border-color-4 focus:outline-none sm:px-8 ${className} ${type !== "radio" ? "mb-8" : ""}`}
      />
    </div>
  );
};

export default LabeledInput;
