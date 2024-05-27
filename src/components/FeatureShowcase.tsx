import { features } from '../constants';
import Section from './Section';
const FeatureShowcase = () => {
    return (
        <Section customPaddings="pt-[40px] lg:pt-[50px] pb-0">
            <div className="w-full h-auto bg-color-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-0 md:px-[53px] py-[2rem] md:py-[100px] gap-10 md:gap-6 items-center">
                {features.map((feature) => (
                    <div
                        key={feature.id}
                        className="flex flex-col md:flex-row justify-center items-center gap-2 w-full"
                    >
                        <div>
                            <img
                                className="w-[60px] h-[60px]"
                                src={feature.icon}
                                alt={feature.title}
                            />
                        </div>
                        <div className="flex flex-col gap-1 md:w-full">
                            <p className="font-poppins text-[1.563rem] font-semibold text-center md:text-start w-full">
                                {feature.title}
                            </p>
                            <p className="font-poppins text-[1.25rem] font-medium text-center md:text-start text-color-6 w-full">
                                {feature.text}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
};

export default FeatureShowcase;
