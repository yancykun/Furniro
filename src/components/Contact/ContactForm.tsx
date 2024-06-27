import Button from "../../components/UI/Button";
import FormField from "../../components/UI/FormField";
import { ContactFormData, ContactSchema } from "../../types/types";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useFormMessageStore } from "../../store/useFormMessageStore";
import Alert from "@mui/material/Alert";

const ContactForm = () => {
  const { successMessage, setSuccessMessage, clearSuccessMessage } =
    useFormMessageStore();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(ContactSchema),
  });

  const handleContactSubmit = async (data: ContactFormData) => {
    console.log("Contact form success", data);

    // Simulate async operation
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setSuccessMessage("Your message has been successfully sent!");

    // Clear success message after 3 sec
    setTimeout(() => {
      clearSuccessMessage();
    }, 3000);

    // Reset the form fields after successful submission
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(handleContactSubmit)}
      className="flex flex-col items-center xl:items-start"
    >
      <div className="flex flex-col">
        <FormField
          name="fullName"
          label="Your name"
          placeholder="Yancy Garret"
          className="h-[75px] w-full sm:w-[528px]"
          register={register}
          error={errors.fullName}
          type="text"
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
          type="text"
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

      {successMessage && (
        <div className="mb-4">
          <Alert variant="filled" severity="success">
            {successMessage}
          </Alert>
        </div>
      )}

      <Button
        white
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
