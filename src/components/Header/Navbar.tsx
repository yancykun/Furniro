import { Link, useLocation } from "react-router-dom";
import { navigation } from "../../constants";
import { useNavigationStore } from "../../store/useNavigationStore";

const Navbar = () => {
  const location = useLocation();
  const openNavigation = useNavigationStore((state) => state.openNavigation);
  const closeNavigation = useNavigationStore((state) => state.closeNavigation);

  return (
    <nav
      className={`${
        openNavigation ? "flex bg-color-1" : "hidden"
      } fixed bottom-0 left-0 right-0 top-[5rem] lg:static lg:mx-auto lg:flex`}
    >
      <div className="z-2 relative m-auto flex flex-col items-center justify-center gap-8 lg:flex-row">
        {navigation.map((nav) => (
          <Link
            key={nav.id}
            to={nav.url}
            onClick={closeNavigation}
            className={`relative block font-poppins text-lg font-semibold text-color-7 transition-colors hover:text-color-4 ${
              nav.url === location.pathname ? "z-2 lg:text-color-4" : ""
            }`}
          >
            {nav.title}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
