import { FieldValues } from "react-hook-form";
import { FormFieldProps } from "../../types/types";

const FormField = <T extends FieldValues>({
  type,
  placeholder,
  name,
  register,
  error,
  className,
  label,
  value,
  checked,
  onChange,
}: FormFieldProps<T>) => {
  return (
    <div
      className={`relative ${type === "radio" ? "flex flex-row-reverse gap-2" : "mb-4 flex flex-col"}`}
    >
      {label && (
        <label
          className={`font-poppins font-medium ${type === "radio" ? "mb-0" : "mb-3"}`}
        >
          {label}
        </label>
      )}

      <input
        type={type}
        placeholder={placeholder}
        {...register(name)}
        value={value}
        checked={checked}
        onChange={onChange}
        className={`rounded-lg border border-color-6 px-4 font-poppins focus:border-2 focus:border-color-4 focus:outline-none ${className}`}
      />

      {error && (
        <span className="mt-2 max-w-[350px] font-poppins font-semibold text-red-800">
          {error.message}
        </span>
      )}
    </div>
  );
};

export default FormField;
