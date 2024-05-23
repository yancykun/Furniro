import Header from './Header';
import { headerImage, next } from '../assets';
import { Link, useLocation } from 'react-router-dom';
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
                        style={{
                            visibility:
                                pathname === item.url ? 'visible' : 'hidden',
                            pointerEvents:
                                pathname === item.url ? 'auto' : 'none',
                            zIndex: pathname === item.url ? 2 : 0, // Ensure the targeted item is in front
                        }}
                    >
                        {pathname === item.url && (
                            <>
                                <p className="h1 mb-4">{item.title}</p>
                                <div className="flex justify-center items-center gap-4">
                                    {/* Add a conditional rendering for the link */}
                                    {pathname !== '/' && (
                                        <Link
                                            to="/"
                                            className="font-poppins font-semibold"
                                        >
                                            Home
                                        </Link>
                                    )}
                                    <img
                                        className="w-4 h-5"
                                        src={next}
                                        alt="greater than icon"
                                    />
                                    <p>{item.title}</p>
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
