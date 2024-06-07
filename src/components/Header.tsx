import { Link, useLocation } from "react-router-dom";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import { cart, logo } from "../assets";
import { navigation } from "../constants";
import { useState } from "react";
import MenuSvg from "../assets/svg/MenuSvg";
import CartSidebar from "./CartSidebar";
import { CartSidebarProps } from "../types/types";
import { useCartStore } from "../store/useCartStore";

const Header = ({ toggleCartSidebar, openCart }: CartSidebarProps) => {
  const location = useLocation();
  const [openNavigation, setOpenNavigation] = useState(false);

  const itemCount = useCartStore((state) => state.itemCount);

  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  };

  const handleClick = () => {
    if (!openNavigation) return;
    enablePageScroll();
    setOpenNavigation(false);
  };

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full ${
        openNavigation
          ? "h-[100%] bg-color-1"
          : "bg-color-1/90 backdrop-blur-md"
      }`}
    >
      <div className="flex items-center justify-between px-[1rem] py-[0.875rem] md:px-[4rem] md:py-[1.25rem]">
        <Link to="/" className="block w-32 md:w-48">
          <img
            src={logo}
            alt="Furnito logo"
            className="block h-auto w-auto max-w-full"
          />
        </Link>

        <nav
          className={`${
            openNavigation ? "flex bg-color-1" : "hidden"
          } fixed bottom-0 left-0 right-0 top-[5rem] lg:static lg:mx-auto lg:flex`}
        >
          <div className="z-2 relative m-auto flex flex-col items-center justify-center gap-8 lg:flex-row">
            {navigation.map((item) => (
              <Link
                to={item.url}
                key={item.id}
                className={`relative block font-poppins text-lg font-semibold text-color-7 transition-colors hover:text-color-4 ${
                  item.url === location.pathname ? "z-2 lg:text-color-4" : ""
                }`}
                onClick={handleClick}
              >
                {item.title}
              </Link>
            ))}
          </div>
        </nav>

        <div className="flex items-center justify-center gap-4">
          <div className="relative">
            <img
              width={25}
              onClick={toggleCartSidebar}
              className="cursor-pointer"
              src={cart}
              alt="Cart"
            />
            {itemCount > 0 && (
              <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-600 text-xs text-white">
                {itemCount}
              </span>
            )}
          </div>

          <button className="flex lg:hidden" onClick={toggleNavigation}>
            <MenuSvg openNavigation={openNavigation} />
          </button>
        </div>

        {openCart && (
          <>
            <div className="fixed inset-0 z-40 bg-color-7/40"></div>
            <div className="fixed right-0 top-0 z-50 h-[550px] w-[80%] sm:w-[417px]">
              <CartSidebar
                toggleCartSidebar={toggleCartSidebar}
                openCart={openCart}
                handleClick={handleClick}
              />
            </div>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
