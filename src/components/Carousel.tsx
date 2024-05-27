import { useState } from 'react';
import { inspiration } from '../constants';
import ArrowIcon from '../assets/svg/ArrowIcon';

const Carousel = () => {
    const [curr, setCurr] = useState(0);

    const nextButton = () => {
        setCurr((curr) => (curr === inspiration.length - 1 ? 0 : curr + 1));
    };

    return (
        <div className="relative w-[380px] h-[400px] md:w-[605px] lg:h-[568px] bg-color-2 p-4 rounded-md">
            <div className="relative w-full h-full overflow-hidden">
                {inspiration.map((item, index) => (
                    <img
                        key={item.id}
                        className={`absolute w-full h-full object-cover transition-opacity duration-500 ease-in-out ${
                            index === curr ? 'opacity-100' : 'opacity-0'
                        }`}
                        src={item.image}
                        alt="Beautiful room inspiration"
                    />
                ))}

                <button
                    className="absolute right-8 top-1/2 transform -translate-y-1/2 w-10 h-10 flex justify-center items-center bg-color-1 rounded-full cursor-pointer"
                    onClick={nextButton}
                >
                    <ArrowIcon />
                </button>
            </div>
            <div className="flex items-center gap-3 justify-center lg:justify-start mt-4">
                {inspiration.map((_, index) => (
                    <div
                        key={index}
                        className={`${
                            index === curr
                                ? 'border border-color-4'
                                : 'border-none'
                        } p-2 rounded-full`}
                    >
                        <div
                            className={`w-[13px] h-[13px] rounded-full ${
                                index === curr ? 'bg-color-4' : 'bg-color-6'
                            }`}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Carousel;
