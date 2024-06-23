import MenuSvg from "../../../assets/svg/MenuSvg";
import { useNavigationStore } from "../../../store/useNavigationStore";

const MenuIcon = () => {
  const toggleNavigation = useNavigationStore(
    (state) => state.toggleNavigation,
  );
  const openNavigation = useNavigationStore((state) => state.openNavigation);

  return (
    <div className="flex lg:hidden" onClick={toggleNavigation}>
      <MenuSvg openNavigation={openNavigation} />
    </div>
  );
};

export default MenuIcon;
