import Header from './Header';
import { furniro, headerImage } from '../assets';
import ArrowIcon from '../assets/svg/ArrowIcon';
import { useLocation } from 'react-router-dom';
import { navigation } from '../constants';

const ExtendedHeader = () => {
    const { pathname } = useLocation();

    return (
        <div className="pt-[3.5rem] md:pt-[5rem] mb-[50px] lg:mb-[60px] w-full relative">
            <Header />
            <div className="relative">
                <img
                    className="w-full h-[310px] object-cover opacity-40"
                    src={headerImage}
                    alt="Header image"
                />

                {navigation.map((item) => (
                    <div
                        key={item.id}
                        className="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center text-center"
                    >
                        {pathname === item.url && (
                            <>
                                <img
                                    className="mb-4"
                                    src={furniro}
                                    alt="Furniro logo"
                                />
                                <p className="h1 mb-3">{item.title}</p>
                                <div className="flex justify-center items-center gap-4">
                                    <p className="font-poppins font-light">
                                        Home
                                    </p>

                                    <ArrowIcon stroke="#000000" />
                                    <p className="font-poppins font-semibold">
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
