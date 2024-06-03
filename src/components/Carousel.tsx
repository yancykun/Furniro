import { useState } from "react";
import { inspiration } from "../constants";
import ArrowIcon from "../assets/svg/ArrowIcon";

const Carousel = () => {
  const [curr, setCurr] = useState(0);

  const nextButton = () => {
    setCurr((curr) => (curr === inspiration.length - 1 ? 0 : curr + 1));
  };

  return (
    <div className="relative h-[400px] w-[380px] rounded-md bg-color-2 p-4 md:w-[605px] lg:h-[568px]">
      <div className="relative h-full w-full overflow-hidden">
        {inspiration.map((item, index) => (
          <img
            key={item.id}
            className={`absolute h-full w-full object-cover transition-opacity duration-500 ease-in-out ${
              index === curr ? "opacity-100" : "opacity-0"
            }`}
            src={item.image}
            alt="Beautiful room inspiration"
          />
        ))}

        <button
          className="absolute right-8 top-1/2 flex h-10 w-10 -translate-y-1/2 transform cursor-pointer items-center justify-center rounded-full bg-color-1"
          onClick={nextButton}
        >
          <ArrowIcon />
        </button>
      </div>
      <div className="mt-4 flex items-center justify-center gap-3 lg:justify-start">
        {inspiration.map((_, index) => (
          <div
            key={index}
            className={`${
              index === curr ? "border border-color-4" : "border-none"
            } rounded-full p-2`}
          >
            <div
              className={`h-[13px] w-[13px] rounded-full ${
                index === curr ? "bg-color-4" : "bg-color-6"
              }`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
