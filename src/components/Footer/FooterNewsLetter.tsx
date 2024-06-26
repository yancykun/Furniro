import Button from "../UI/Button";

const FooterNewsLetter = () => {
  return (
    <div className="flex w-full flex-col items-center lg:w-auto lg:items-start">
      <p className="mb-[40px] font-poppins text-base text-color-6 lg:mb-[50px]">
        Newsletter
      </p>
      <div className="flex flex-col items-center gap-4 sm:flex-row">
        <input
          className="rounded-sm border border-color-4 p-3 font-poppins"
          type="text"
          placeholder="Enter Your Email Address"
        />
        <Button className="w-[8rem]">SUBSCRIBE</Button>
      </div>
    </div>
  );
};

export default FooterNewsLetter;
