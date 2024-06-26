import { features } from "../../constants";

const Features = () => {
  return (
    <div className="grid h-auto w-full grid-cols-1 items-center gap-5 bg-color-2 px-0 py-[2rem] md:grid-cols-2 md:px-[53px] md:py-[100px] lg:grid-cols-4">
      {features.map((feature) => (
        <div
          key={feature.id}
          className="flex w-full flex-col items-center justify-center gap-2 md:flex-row"
        >
          <div>
            <img
              className="h-[60px] w-[60px]"
              src={feature.icon}
              alt={feature.title}
            />
          </div>
          <div className="flex flex-col gap-1 md:w-full">
            <p className="w-full text-center font-poppins text-[1.563rem] font-semibold md:text-start">
              {feature.title}
            </p>
            <p className="w-full text-center font-poppins text-[1.25rem] font-medium text-color-6 md:text-start">
              {feature.text}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Features;
