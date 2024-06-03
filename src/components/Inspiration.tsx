import Section from "./Section";
import Button from "./Button";
import Carousel from "./Carousel";

const Inspiration = () => {
  return (
    <Section className="flex h-auto w-full flex-col items-center bg-color-2 md:h-[800px] md:gap-6 lg:flex-row">
      <div className="flex max-w-[544px] flex-1 flex-col items-center justify-center lg:items-start lg:pl-[112px] lg:pr-8">
        <h2 className="h2 mb-6 pt-4 text-center lg:text-start">
          Beautiful rooms inspiration
        </h2>
        <p className="mb-4 max-w-xl text-center font-poppins text-base text-color-6 lg:text-start">
          Our designer already made a lot of beautiful prototypes of rooms that
          inspire you
        </p>
        <Button className="max-md:mb-6">Explore More</Button>
      </div>

      <div className="flex flex-1 justify-center lg:justify-end">
        <Carousel />
      </div>
    </Section>
  );
};

export default Inspiration;
