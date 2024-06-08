import { Link } from "react-router-dom";
import { help, navigation } from "../../../constants/index";
import Section from "../../Layout/Section";
import Button from "../../UI/Button";

const Footer = () => {
  return (
    <Section>
      <div className="flex flex-col items-center border-b-2 border-t-2 py-10 lg:flex-row lg:items-start lg:justify-between lg:px-[100px]">
        <div className="flex flex-col lg:w-1/3">
          <p className="mb-[40px] font-poppins text-[1.5rem] font-bold lg:mb-[50px]">
            Funiro.
          </p>
          <p className="font-poppins text-base text-color-6">
            400 University Drive Suite 200 Coral
            <br />
            Gables,
            <br />
            FL 33134 USA
          </p>
        </div>

        <div className="mt-[40px] flex flex-col lg:mt-0 lg:w-2/3 lg:flex-row lg:justify-between lg:gap-10">
          <div className="mb-0 flex flex-col justify-between gap-0 sm:flex-row lg:mb-[40px] lg:gap-10">
            <div>
              <p className="mb-[40px] text-center font-poppins text-base text-color-6 sm:text-start lg:mb-[50px]">
                Links
              </p>
              {navigation.map((item, index) => (
                <Link
                  key={item.id}
                  className={`mb-[40px] block text-center font-poppins text-base font-bold lg:mb-[50px] lg:flex sm:text-start${
                    index === navigation.length - 1 ? "mb-0 sm:text-start" : ""
                  }`}
                  to={item.url}
                >
                  {item.title}
                </Link>
              ))}
            </div>
            <div>
              <p className="mb-[40px] text-center font-poppins text-base text-color-6 sm:text-start lg:mb-[50px]">
                Help
              </p>
              {help.map((item, index) => (
                <Link
                  key={item.id}
                  className={`mb-[40px] block text-center font-poppins text-base font-bold sm:text-start lg:mb-[50px] lg:flex ${
                    index === help.length - 1 ? "mb-0" : ""
                  }`}
                  to={item.url}
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>

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
        </div>
      </div>

      <p className="px-[20px] py-8 text-center font-poppins font-semibold lg:px-[100px] lg:text-start">
        2024 furino. All rights reverved
      </p>
    </Section>
  );
};

export default Footer;
