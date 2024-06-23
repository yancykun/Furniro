import { furniro, headerImage } from "../../../assets";
import ArrowIcon from "../../../assets/svg/ArrowIcon";
import { useLocation } from "react-router-dom";
import { navigation } from "../../../constants/index";

interface ExtendedHeaderProps {
  customTitle?: string;
}

const ExtendedHeader = ({ customTitle }: ExtendedHeaderProps) => {
  const { pathname } = useLocation();

  const currentNavItem = navigation.find((item) => item.url === pathname);

  const title = customTitle || currentNavItem?.title;

  return (
    <div className="relative mb-[50px] w-full pt-[3.5rem] md:pt-[5rem] lg:mb-[60px]">
      <div className="relative">
        <img
          className="h-[310px] w-full object-cover opacity-40"
          src={headerImage}
          alt="Header image"
        />

        {title && (
          <div className="absolute bottom-0 left-0 right-0 top-0 flex flex-col items-center justify-center text-center">
            <img className="mb-4" src={furniro} alt="Furniro logo" />
            <p className="h1 mb-3">{title}</p>
            <div className="flex items-center justify-center gap-4">
              <p className="font-poppins font-light">Home</p>

              <ArrowIcon stroke="#000000" />
              <p className="font-poppins font-semibold">{title}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ExtendedHeader;
