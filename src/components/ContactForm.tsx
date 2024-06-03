import Button from "./Button";

const ContactForm = () => {
  return (
    <>
      <form className="flex flex-col items-center xl:items-start">
        <div className="flex flex-col">
          <label className="mb-4 font-poppins font-medium">Your name</label>
          <input
            className="input h-[75px] w-full md:w-[400px] lg:w-[528px]"
            placeholder="Abc"
          />
          <label className="mb-4 font-poppins font-medium">Email address</label>
          <input
            className="input h-[75px] w-full md:w-[400px] lg:w-[528px]"
            placeholder="Abs@yancyg.dev"
          />
          <label className="mb-4 font-poppins font-medium">Subject</label>
          <input
            className="input h-[75px] w-full md:w-[400px] lg:w-[528px]"
            placeholder="This is an optional"
          />
          <label className="mb-4 font-poppins font-medium">Message</label>
          <textarea
            className="input h-[120px] w-full md:w-[400px] lg:w-[528px]"
            placeholder="Hi! I'd like to ask about."
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
