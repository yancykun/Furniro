import { contactDetails } from '../constants';

const ContactDetails = () => {
    return (
        <div className="flex flex-col items-center xl:items-start  gap-12 w-full xl:ml-10">
            {contactDetails.map((detail) => (
                <div className="flex gap-8" key={detail.id}>
                    <img
                        className="w-[23px] h-[23px]"
                        src={detail.image}
                        alt="Contact image"
                    />

                    <div>
                        <h5 className="font-poppins font-medium text-2xl">
                            {detail.title}
                        </h5>
                        {detail.text && (
                            <p className="font-poppins text-base w-[212px]">
                                {detail.text}
                            </p>
                        )}
                        {detail.mobile && (
                            <p className="font-poppins text-base w-[212px]">
                                {detail.mobile}
                            </p>
                        )}
                        {detail.hotline && (
                            <p className="font-poppins text-base w-[212px]">
                                {detail.hotline}
                            </p>
                        )}
                        {detail.weekends && (
                            <p className="font-poppins text-base w-[212px]">
                                {detail.weekends}
                            </p>
                        )}
                        {detail.weekdays && (
                            <p className="font-poppins text-base w-[212px]">
                                {detail.weekdays}
                            </p>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ContactDetails;
