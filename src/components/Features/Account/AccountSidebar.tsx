import { CgProfile } from "react-icons/cg";
import Button from "../../UI/Button";
import { Link } from "react-router-dom";

const AccountSidebar = () => {
  return (
    <div className="grid">
      <div className="flex items-center gap-2 sm:gap-4">
        <CgProfile className="cursor-pointer" size={35} />
        <p className="font-poppins text-sm text-color-6 sm:text-base">
          yancygarret@gmail.com
        </p>
      </div>
      <Link to="/cart">
        <Button
          white
          className="mt-4 h-[30px] w-[120px] rounded-[50px] font-poppins text-xs font-medium"
        >
          Cart
        </Button>
      </Link>
      <Button
        white
        className="mt-2 h-[30px] w-[120px] rounded-[50px] font-poppins text-xs font-medium"
      >
        Logout
      </Button>
    </div>
  );
};

export default AccountSidebar;
