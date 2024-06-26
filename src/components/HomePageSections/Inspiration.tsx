import Section from "../UI/Section";
import Carousel from "../Carousel/Carousel";
import InspirationText from "../../components/Inspiration/InspirationText";

const Inspiration = () => {
  return (
    <Section className="flex h-auto w-full flex-col items-center bg-color-2 md:h-[800px] md:gap-6 lg:flex-row">
      <InspirationText />
      <Carousel />
    </Section>
  );
};

export default Inspiration;
