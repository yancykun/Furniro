import { Link, useLocation } from "react-router-dom";
import { cart, logo } from "../../../assets";
import { navigation } from "../../../constants/index";
import MenuSvg from "../../../assets/svg/MenuSvg";
import CartSidebar from "../../Features/Cart/CartSidebar";
import { useCartStore } from "../../../store/useCartStore";
import { useCartSidebarStore } from "../../../store/useCartSidebarStore";
import { useNavigationStore } from "../../../store/useNavigationStore";
import { CgProfile } from "react-icons/cg";
import { useProfileSidebarStore } from "../../../store/useProfileSidebarStore";
import ProfileSidebar from "../../Features/Profile/ProfileSidebar";

const Header = () => {
  const location = useLocation();
  const itemCount = useCartStore((state) => state.itemCount);
  const openNavigation = useNavigationStore((state) => state.openNavigation);
  const openCart = useCartSidebarStore((state) => state.openCart);
  const openProfile = useProfileSidebarStore((state) => state.openProfile);

  const toggleNavigation = useNavigationStore(
    (state) => state.toggleNavigation,
  );
  const toggleCartSidebar = useCartSidebarStore(
    (state) => state.toggleCartSidebar,
  );
  const toggleProfileSidebar = useProfileSidebarStore(
    (state) => state.toggleProfileSidebar,
  );

  const closeNavigation = useNavigationStore((state) => state.closeNavigation);

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
                onClick={closeNavigation}
              >
                {item.title}
              </Link>
            ))}
          </div>
        </nav>

        <div className="flex items-center justify-center gap-4">
          <div className="relative flex items-center justify-between gap-4">
            <img
              width={25}
              onClick={toggleCartSidebar}
              className="cursor-pointer"
              src={cart}
              alt="Cart"
            />

            <CgProfile
              className="cursor-pointer"
              onClick={toggleProfileSidebar}
              size={21}
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
              <CartSidebar />
            </div>
          </>
        )}

        {openProfile && (
          <>
            <div className="fixed inset-0 z-40 bg-color-7/40"></div>
            <div className="fixed right-0 top-0 z-50 h-[250px] w-[80%] sm:w-[350px]">
              <ProfileSidebar />
            </div>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
