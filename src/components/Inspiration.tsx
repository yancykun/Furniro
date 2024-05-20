import Section from './Section';
import Button from './Button';
import Carousel from './Carousel';

const Inspiration = () => {
    return (
        <Section className="flex flex-col lg:flex-row items-center w-full h-auto md:h-[800px] bg-color-2  md:gap-6">
            <div className="flex-1 items-center lg:items-start lg:pl-[112px] flex flex-col justify-center max-w-[544px] lg:pr-8">
                <h2 className="h2 text-center lg:text-start mb-6 pt-4">
                    Beautiful rooms inspiration
                </h2>
                <p className="font-poppins text-base text-color-6 max-w-xl text-center lg:text-start mb-4">
                    Our designer already made a lot of beautiful prototypes of
                    rooms that inspire you
                </p>
                <Button className="max-md:mb-6">Explore More</Button>
            </div>

            <div className="flex-1 flex justify-center lg:justify-end">
                <Carousel />
            </div>
        </Section>
    );
};

export default Inspiration;
