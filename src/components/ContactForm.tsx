import Button from "./Button";
import LabeledInput from "./LabeledInput";
import LabeledTextarea from "./LabeledTextarea";

const ContactForm = () => {
  return (
    <>
      <form className="flex flex-col items-center xl:items-start">
        <div className="flex flex-col">
          <LabeledInput
            className="h-[75px] w-full md:w-[400px] lg:w-[528px]"
            label="Your name"
            placeholder="Yancy Garret"
          />
          <LabeledInput
            className="h-[75px] w-full md:w-[400px] lg:w-[528px]"
            label="Email address"
            placeholder="Yancygarret@yancyg.dev"
          />
          <LabeledInput
            className="h-[75px] w-full md:w-[400px] lg:w-[528px]"
            label="Subject"
            placeholder="This is an optional"
          />
          <LabeledTextarea
            className="h-[120px] w-full md:w-[400px] lg:w-[528px]"
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
