import Button from "../../UI/Button";
import FormField from "../../UI/FormField";
import { ContactFormData, ContactSchema } from "../../../types/types";
import useFormHandler from "../../../hooks/useFormHandler";
import useFormStore from "../../../store/useFormStore";

const ContactForm = () => {
  const clearSuccessMessage = useFormStore(
    (state) => state.clearSuccessMessage,
  );
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    successMessage,
    onSubmit,
  } = useFormHandler(ContactSchema);

  const handleContactSubmit = (data: ContactFormData) => {
    console.log("Contact form success", data);
  };

  return (
    <form
      onSubmit={handleSubmit((data) => onSubmit(data, handleContactSubmit))}
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
