import { hero } from "../../assets";
import Button from "../UI/Button";
import Section from "../UI/Section";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <Section id="home">
      <div className="max-md:px-[0.5rem] max-md:pt-[50px]">
        <img
          className="relative hidden h-[100vh] w-full object-cover opacity-90 md:flex"
          src={hero}
          alt="Hero image"
        />
        <div className="flex w-full flex-col items-center rounded-xl bg-color-2 py-4 md:absolute md:right-[30px] md:top-[10%] md:max-w-[400px] md:items-start md:px-[1.5rem] lg:right-[57px] lg:max-w-[643px] lg:px-[2.375rem] lg:pt-[3.875rem]">
          <h6 className="h6 mb-2 text-color-5">New Arrival</h6>
          <h1 className="h1 mb-4 text-center text-color-4 md:text-start">
            Discover Our New Collection
          </h1>
          <p className="mb-8 text-center font-poppins text-lg font-medium text-color-5 max-md:max-w-[300px] md:text-start lg:max-w-lg">
            Introducing our new collection: Elevate your space with style.
            Explore now!
          </p>
          <Link to="/shop">
            <Button className="h-[3.375rem] uppercase md:h-[4.375rem]">
              Shop now
            </Button>
          </Link>
        </div>
      </div>
    </Section>
  );
};

export default Hero;
