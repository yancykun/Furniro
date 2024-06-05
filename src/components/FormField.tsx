import { FormFieldProps } from "../types/types";

const FormField = ({
  type,
  placeholder,
  name,
  register,
  error,
  className,
  label,
}: FormFieldProps) => {
  return (
    <div className="mb-8 flex flex-col">
      <label className="mb-3 font-poppins font-medium">{label}</label>

      <input
        type={type}
        placeholder={placeholder}
        {...register(name)}
        className={`rounded-lg border border-color-6 px-4 font-poppins focus:border-2 focus:border-color-4 focus:outline-none sm:px-8 ${className}`}
      />
      {error && (
        <span className="mt-2 font-poppins font-semibold text-red-800">
          {error.message}
        </span>
      )}
    </div>
  );
};

export default FormField;
