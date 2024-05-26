import Header from './Header';
import { headerImage, next } from '../assets';
import { useLocation } from 'react-router-dom';
import { navigation, categories } from '../constants';

const ExtendedHeader = () => {
    const { pathname } = useLocation();

    const allItems = [...navigation, ...categories];

    return (
        <div className="pt-[3.5rem] md:pt-[5rem] mb-[50px] lg:mb-[60px] w-full relative">
            <Header />
            <div className="relative">
                <img
                    className="w-full h-[310px] object-cover opacity-40"
                    src={headerImage}
                    alt="Header image"
                />

                {allItems.map((item) => (
                    <div
                        key={item.id}
                        className="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center text-center"
                    >
                        {pathname === item.url && (
                            <>
                                <p className="h1 mb-4">{item.title}</p>
                                <div className="flex justify-center items-center gap-4">
                                    <p className="font-poppins font-semibold">
                                        Home
                                    </p>

                                    <img
                                        className="w-4 h-5"
                                        src={next}
                                        alt="greater than icon"
                                    />
                                    <p className="font-poppins font-light">
                                        {item.title}
                                    </p>
                                </div>
                            </>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ExtendedHeader;
