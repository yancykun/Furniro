import Section from "../../Layout/Section";
import ContactDetails from "../../../components/Features/Contact/ContactDetails";
import ContactForm from "../../../components/Features/Contact/ContactForm";

const Contact = () => {
  return (
    <Section>
      <div className="flex flex-col items-center justify-center">
        <div className="px-[2rem]">
          <h2 className="mb-2 text-center font-poppins text-[1.5rem] font-semibold md:text-[2.25rem]">
            Get In Touch With Us
          </h2>
          <p className="max-w-[644px] text-center font-poppins text-[0.875rem] text-color-6 md:text-base">
            For More Information About Our Product & Services. Please Feel Free
            To Drop Us An Email. Our Staff Always Be There To Help You Out. Do
            Not Hesitate!
          </p>
        </div>

        <div className="mt-20 flex w-full flex-col-reverse gap-20 px-[2rem] lg:px-[191px] xl:flex-row xl:gap-10">
          <ContactDetails />
          <ContactForm />
        </div>
      </div>
    </Section>
  );
};

export default Contact;
