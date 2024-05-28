import Section from './Section';
import ContactDetails from './ContactDetails';
import ContactForm from './ContactForm';

const Contact = () => {
    return (
        <Section>
            <div className="flex flex-col justify-center items-center">
                <div className="px-[2rem]">
                    <h2 className="font-poppins md:text-[2.25rem] text-[1.5rem] font-semibold text-center mb-2">
                        Get In Touch With Us
                    </h2>
                    <p className="font-poppins md:text-base text-[0.875rem] text-color-6 text-center max-w-[644px]">
                        For More Information About Our Product & Services.
                        Please Feel Free To Drop Us An Email. Our Staff Always
                        Be There To Help You Out. Do Not Hesitate!
                    </p>
                </div>

                <div className="flex flex-col-reverse xl:flex-row w-full lg:px-[191px] px-[2rem] mt-20 gap-20 xl:gap-10">
                    <ContactDetails />
                    <ContactForm />
                </div>
            </div>
        </Section>
    );
};

export default Contact;
