import { useNavigationStore } from "../../store/useNavigationStore";
import AccountProfile from "../Account/AccountProfile";
import Navbar from "../Header/Navbar";
import SidebarOverlay from "../../components/SidebarOverlay/SidebarOverlay";
import CartIcon from "../Cart/CartIcon";
import Logo from "../Header/Logo";
import MenuIcon from "../Header/MenuIcon";

const Header = () => {
  const openNavigation = useNavigationStore((state) => state.openNavigation);

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full ${
        openNavigation
          ? "h-[100%] bg-color-1"
          : "bg-color-1/90 backdrop-blur-md"
      }`}
    >
      <div className="flex items-center justify-between px-[1rem] py-[0.875rem] md:px-[4rem] md:py-[1.25rem]">
        <Logo />
        <Navbar />

        <div className="flex items-center justify-center gap-4">
          <div className="relative flex items-center justify-between gap-4">
            <CartIcon />
            <AccountProfile />
          </div>
          <MenuIcon />
        </div>
        <SidebarOverlay />
      </div>
    </header>
  );
};

export default Header;
