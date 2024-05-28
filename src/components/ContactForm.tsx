import React from 'react';
import Button from './Button';

const ContactForm = () => {
    return (
        <>
            <form className="flex flex-col items-center xl:items-start">
                <div className="flex flex-col">
                    <label className="font-poppins font-medium mb-4">
                        Your name
                    </label>
                    <input
                        className="input w-full md:w-[400px] lg:w-[528px] h-[75px]"
                        placeholder="Abc"
                    />
                    <label className="font-poppins font-medium mb-4">
                        Email address
                    </label>
                    <input
                        className="input w-full md:w-[400px] lg:w-[528px] h-[75px]"
                        placeholder="Abs@yancyg.dev"
                    />
                    <label className="font-poppins font-medium mb-4">
                        Subject
                    </label>
                    <input
                        className="input w-full md:w-[400px] lg:w-[528px] h-[75px]"
                        placeholder="This is an optional"
                    />
                    <label className="font-poppins font-medium mb-4">
                        Message
                    </label>
                    <textarea
                        className="input w-full md:w-[400px] lg:w-[528px] h-[120px]"
                        placeholder="Hi! I'd like to ask about."
                    />
                </div>
                <Button className="capitalize mt-3 rounded-md font-normal">
                    Submit
                </Button>
            </form>
        </>
    );
};

export default ContactForm;
