type LabeledTextareaProps = {
  label?: string;
  placeholder?: string;
  className?: string;
};

const LabeledTextarea = ({
  label,
  placeholder,
  className,
}: LabeledTextareaProps) => {
  return (
    <div className="flex flex-col">
      <label className="mb-4 font-poppins font-medium">{label}</label>
      <textarea
        placeholder={placeholder}
        className={`mb-8 rounded-lg border border-color-6 px-8 py-4 font-poppins focus:border-2 focus:border-color-4 focus:outline-none ${className}`}
      />
    </div>
  );
};

export default LabeledTextarea;
