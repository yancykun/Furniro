type LabeledInputProps = {
  label?: string;
  placeholder?: string;
  className?: string;
  type?: string;
};

const LabeledInput = ({
  label,
  placeholder,
  className,
  type = "text",
}: LabeledInputProps) => {
  return (
    <div className="flex flex-col">
      <label className="mb-4 font-poppins font-medium">{label}</label>
      <input
        placeholder={placeholder}
        type={type}
        className={`mb-8 h-[75px] w-full rounded-lg border border-color-6 px-8 py-4 font-poppins focus:border-2 focus:border-color-4 focus:outline-none md:w-[400px] lg:w-[528px] ${className}`}
      />
    </div>
  );
};

export default LabeledInput;
