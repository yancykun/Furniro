import { useEffect } from "react";
import { useForm, UseFormReturn, FieldValues } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ZodSchema } from "zod";
import useFormStore from "../store/useFormStore";

type UseFormHandlerReturn<T extends FieldValues> = Omit<
  UseFormReturn<T>,
  "formState"
> & {
  formState: {
    errors: UseFormReturn<T>["formState"]["errors"];
    isSubmitting: UseFormReturn<T>["formState"]["isSubmitting"];
  };
  successMessage: string;
  onSubmit: (data: T, onSuccess: (data: T) => void) => Promise<void>;
};

const useFormHandler = <T extends FieldValues>(
  schema: ZodSchema<T>,
): UseFormHandlerReturn<T> => {
  const { successMessage, setSuccessMessage, clearSuccessMessage } =
    useFormStore();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
    reset,
    watch,
    getValues,
    getFieldState,
    clearErrors,
    trigger,
    control,
    setFocus,
    setValue,
    resetField,
    unregister,
  } = useForm<T>({
    resolver: zodResolver(schema),
  });

  useEffect(() => {
    if (successMessage) {
      const timer = setTimeout(() => {
        clearSuccessMessage();
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [successMessage, clearSuccessMessage]);

  const onSubmit = async (data: T, onSuccess: (data: T) => void) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      onSuccess(data);
      setSuccessMessage("Form was successful!");
      reset();
    } catch (error) {
      setError("root", {
        type: "manual",
        message: "Something went wrong. Please try again later.",
      });
      setSuccessMessage("");
    }
  };

  return {
    register,
    handleSubmit,
    formState: {
      errors,
      isSubmitting,
    },
    setError,
    reset,
    watch,
    getValues,
    getFieldState,
    clearErrors,
    trigger,
    control,
    setFocus,
    setValue,
    resetField,
    unregister,
    successMessage,
    onSubmit,
  };
};

export default useFormHandler;
