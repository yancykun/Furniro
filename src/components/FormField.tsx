import { FieldValues } from "react-hook-form";
import { FormFieldProps } from "../types/types";

const FormField = <T extends FieldValues>({
  type = "text",
  placeholder,
  name,
  register,
  error,
  className,
  label,
}: FormFieldProps<T>) => {
  return (
    <div className="mb-8 flex flex-col">
      {label && (
        <label className="mb-3 font-poppins font-medium">{label}</label>
      )}
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
