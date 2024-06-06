import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import Button from "./Button";
import FormField from "./FormField";
import { ContactFormData, ContactSchema } from "../types/types";
import { zodResolver } from "@hookform/resolvers/zod";

const ContactForm = () => {
  const [successMessage, setSuccessMessage] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(ContactSchema),
  });

  const clearSuccessMessage = () => {
    setSuccessMessage("");
  };

  useEffect(() => {
    if (successMessage) {
      const timer = setTimeout(() => {
        setSuccessMessage("");
      }, 5000); // Message disappears after 5 seconds

      return () => clearTimeout(timer); // Clear timeout if the component unmounts or successMessage changes
    }
  }, [successMessage]);

  const onSubmit = async (data: ContactFormData) => {
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
      <div className="flex flex-col" onInput={clearSuccessMessage}>
        <FormField
          name="fullName"
          label="Your name"
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
        className="mt-3 rounded-md border capitalize"
      >
        {isSubmitting ? "Submitting" : "Submit"}
      </Button>
    </form>
  );
};

export default ContactForm;
