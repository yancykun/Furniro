import Button from "./Button";
import LabeledInput from "./LabeledInput";
import LabeledTextarea from "./LabeledTextarea";

const ContactForm = () => {
  return (
    <>
      <form className="flex flex-col items-center xl:items-start">
        <div className="flex flex-col">
          <LabeledInput label="Your name" placeholder="Yancy Garret" />
          <LabeledInput
            label="Email address"
            placeholder="Yancygarret@yancyg.dev"
          />
          <LabeledInput label="Subject" placeholder="This is an optional" />
          <LabeledTextarea
            label="Message"
            placeholder="Hi! I'd like to ask about..."
          />
        </div>
        <Button className="mt-3 rounded-md font-normal capitalize">
          Submit
        </Button>
      </form>
    </>
  );
};

export default ContactForm;
