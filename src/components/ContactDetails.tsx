import { contactDetails } from "../constants";

const ContactDetails = () => {
  return (
    <div className="flex w-full flex-col items-center gap-12 xl:ml-10 xl:items-start">
      {contactDetails.map((detail) => (
        <div className="flex gap-8" key={detail.id}>
          <img
            className="h-[23px] w-[23px]"
            src={detail.image}
            alt="Contact image"
          />

          <div>
            <h5 className="font-poppins text-2xl font-medium">
              {detail.title}
            </h5>
            {detail.text && (
              <p className="w-[212px] font-poppins text-base">{detail.text}</p>
            )}
            {detail.mobile && (
              <p className="w-[212px] font-poppins text-base">
                {detail.mobile}
              </p>
            )}
            {detail.hotline && (
              <p className="w-[212px] font-poppins text-base">
                {detail.hotline}
              </p>
            )}
            {detail.weekends && (
              <p className="w-[212px] font-poppins text-base">
                {detail.weekends}
              </p>
            )}
            {detail.weekdays && (
              <p className="w-[212px] font-poppins text-base">
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
