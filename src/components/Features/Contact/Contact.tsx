import Section from "../../Layout/Section";
import ContactDetails from "../../../components/Features/Contact/ContactDetails";
import ContactForm from "../../../components/Features/Contact/ContactForm";
import ContactText from "./ContactText";

const Contact = () => {
  return (
    <Section>
      <div className="flex flex-col items-center justify-center">
        <ContactText />

        <div className="mt-20 flex w-full flex-col-reverse gap-20 px-[2rem] lg:px-[191px] xl:flex-row xl:gap-10">
          <ContactDetails />
          <ContactForm />
        </div>
      </div>
    </Section>
  );
};

export default Contact;
