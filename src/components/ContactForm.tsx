import { useState } from "react";
import { useForm } from "react-hook-form";
import Button from "./Button";
import FormField from "./FormField";
import { FormData, UserSchema } from "../types/types";
import { zodResolver } from "@hookform/resolvers/zod";

const ContactForm = () => {
  const [successMessage, setSuccessMessage] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(UserSchema),
  });

  const onSubmit = async (data: FormData) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log("Success", data);
      setSuccessMessage("Your message has been sent successfully!");
      reset();
    } catch (error) {
      setError("root", {
        type: "manual",
        message: "Something went wrong. Please try again later.",
      });
      setSuccessMessage("");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col items-center xl:items-start"
    >
      <div className="flex flex-col">
        <FormField
          name="fullName"
          label="Your name"
          type="text"
          placeholder="Yancy Garret"
          className="h-[75px] w-full sm:w-[528px]"
          register={register}
          error={errors.fullName}
        />
        <FormField
          name="email"
          label="Email address"
          type="email"
          placeholder="Yancygarret@yancyg.dev"
          className="h-[75px] w-full sm:w-[528px]"
          register={register}
          error={errors.email}
        />
        <FormField
          name="subject"
          label="Subject"
          type="text"
          placeholder="This is an optional"
          className="h-[75px] w-full sm:w-[528px]"
          register={register}
          error={errors.subject}
        />
        <FormField
          name="message"
          label="Message"
          type="text"
          placeholder="Hi! I'd like to ask about..."
          className="h-[120px] w-full sm:w-[528px]"
          register={register}
          error={errors.message}
        />
      </div>
      {errors.root && (
        <div className="mb-4 font-poppins font-semibold text-red-800">
          {errors.root.message}
        </div>
      )}
      {successMessage && (
        <div className="mb-4 font-poppins font-semibold text-green-800">
          {successMessage}
        </div>
      )}
      <Button
        disabled={isSubmitting}
        type="submit"
        white
        border
        className="mt-3 rounded-md border bg-color-4 font-medium capitalize text-color-2"
      >
        {isSubmitting ? "Submitting" : "Submit"}
      </Button>
    </form>
  );
};

export default ContactForm;
