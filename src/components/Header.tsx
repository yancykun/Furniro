import { Link, useLocation } from 'react-router-dom';
import { disablePageScroll, enablePageScroll } from 'scroll-lock';
import { cart, logo } from '../assets';
import { navigation } from '../constants';
import { useState } from 'react';
import MenuSvg from '../assets/svg/MenuSvg';
import CardCart from './CardCart';

const Header = () => {
    const location = useLocation();

    const [openNavigation, setOpenNavigation] = useState(false);
    const [openCart, setOpenCart] = useState(false);

    const toggleNavigation = () => {
        if (openNavigation) {
            setOpenNavigation(false);
            enablePageScroll();
        } else {
            setOpenNavigation(true);
            disablePageScroll();
        }
    };

    const toggleCart = () => {
        setOpenCart(!openCart);
    };

    const handleClick = () => {
        if (!openNavigation) return;

        enablePageScroll();
        setOpenNavigation(false);
    };

    return (
        <header
            className={`fixed top-0 left-0 w-full z-50 ${
                openNavigation
                    ? 'bg-color-1 h-[100%]'
                    : 'bg-color-1/90 backdrop-blur-md'
            }`}
        >
            <div className="flex items-center justify-between py-[0.875rem] px-[1rem] md:py-[1.25rem] md:px-[4rem]">
                <Link to="/" className="block w-32 md:w-48">
                    <img
                        src={logo}
                        alt="Furnito logo"
                        className="block w-auto max-w-full h-auto"
                    />
                </Link>

                <nav
                    className={`${
                        openNavigation ? 'flex bg-white' : 'hidden'
                    } fixed top-[5rem] bottom-0 right-0 left-0 lg:static lg:flex lg:mx-auto`}
                >
                    <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row gap-8">
                        {navigation.map((item) => (
                            <Link
                                to={item.url}
                                key={item.id}
                                className={`block relative font-poppins text-lg text-color-7 font-semibold transition-colors hover:text-color-4 ${
                                    item.url === location.pathname
                                        ? 'z-2 lg:text-color-4'
                                        : ''
                                }`}
                                onClick={handleClick}
                            >
                                {item.title}
                            </Link>
                        ))}
                    </div>
                </nav>

                <div className="flex items-center justify-center gap-4">
                    <img
                        onClick={toggleCart}
                        width={25}
                        className="cursor-pointer"
                        src={cart}
                        alt="Cart"
                    />

                    <button
                        className="flex lg:hidden"
                        onClick={toggleNavigation}
                    >
                        <MenuSvg openNavigation={openNavigation} />
                    </button>
                    {openCart && (
                        <>
                            <div
                                className="fixed inset-0 bg-color-6 opacity-70 z-40"
                                onClick={toggleCart}
                            ></div>
                            <div className="fixed top-0 right-0 w-[90%] sm:w-[417px] h-[90vh] z-50 bg-color-1 pt-4">
                                <CardCart toggleCart={toggleCart} />
                            </div>
                        </>
                    )}
                </div>
            </div>
        </header>
    );
};

export default Header;
