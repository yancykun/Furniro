import { help, navigation } from '../constants';
import Section from './Section';

const Footer = () => {
    return (
        <Section customPaddings="pt-[50px] lg:pt-[60px]">
            <div className="flex flex-col items-center lg:items-start lg:flex-row lg:justify-between px-[20px] lg:px-[100px] py-10 border-t-2 border-b-2 gap-4">
                <div className="flex flex-col lg:w-1/3">
                    <p className="font-poppins font-bold text-[1.5rem] mb-[40px] lg:mb-[50px]">
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

                <div className="flex flex-col lg:flex-row lg:w-2/3 lg:justify-between mt-[40px] lg:mt-0 gap-4 lg:gap-20">
                    <div className="flex justify-center gap-20 mb-[40px] lg:mb-0">
                        <div>
                            <p className="font-poppins text-base text-color-6 mb-[40px] lg:mb-[50px]">
                                Links
                            </p>
                            {navigation.map((item, index) => (
                                <a
                                    key={item.id}
                                    className={`block lg:flex font-poppins font-bold text-base mb-[40px] lg:mb-[50px] ${
                                        index === navigation.length - 1
                                            ? 'mb-0'
                                            : ''
                                    }`}
                                    href={item.url}
                                >
                                    {item.title}
                                </a>
                            ))}
                        </div>
                        <div>
                            <p className="font-poppins text-base text-color-6 mb-[40px] lg:mb-[50px]">
                                Help
                            </p>
                            {help.map((item, index) => (
                                <a
                                    key={item.id}
                                    className={`block lg:flex font-poppins font-bold text-base mb-[40px] lg:mb-[50px] ${
                                        index === help.length - 1 ? 'mb-0' : ''
                                    }`}
                                    href={item.url}
                                >
                                    {item.title}
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="flex flex-col">
                        <p className="font-poppins text-base text-color-7 mb-[40px] lg:mb-[50px]">
                            Newsletter
                        </p>
                        <div className="flex gap-6">
                            <input
                                className="font-poppins p-2 border-b-[1px] border-color-7"
                                type="text"
                                placeholder="Enter Your Email"
                            />
                            <button className="font-poppins font-semibold text-base border-b-[1px] border-color-7">
                                SUBSCRIBE
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <p className="font-poppins font-semibold px-[20px] lg:px-[100px] py-8">
                2023 furino. All rights reverved
            </p>
        </Section>
    );
};

export default Footer;
