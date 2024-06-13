import { CgProfile } from "react-icons/cg";
import Button from "../../UI/Button";
import { Link } from "react-router-dom";
import { useProfileSidebarStore } from "../../../store/useProfileSidebarStore";
import { useState } from "react";

const AccountSidebar = () => {
  const [isLoggedIn] = useState(false);
  const closeProfileSidebar = useProfileSidebarStore(
    (state) => state.closeProfileSidebar,
  );

  return (
    <>
      {isLoggedIn ? (
        <>
          <div className="flex items-center gap-2 sm:gap-4">
            <CgProfile className="cursor-pointer" size={35} />
            <p className="font-poppins text-sm text-color-6 sm:text-base">
              yancygarret@gmail.com
            </p>
          </div>
          <div className="mt-6 flex gap-4">
            <Link to="/cart">
              <Button
                white
                onClick={closeProfileSidebar}
                className="h-[30px] w-[100px] rounded-[50px] font-poppins text-xs font-medium"
              >
                Cart
              </Button>
            </Link>
            <Button
              white
              onClick={closeProfileSidebar}
              className="h-[30px] w-[100px] rounded-[50px] font-poppins text-xs font-medium"
            >
              Logout
            </Button>
          </div>
        </>
      ) : (
        <div>
          <p className="font-poppins text-xl font-semibold">
            You are not logged in.
          </p>
          <div className="mt-6 flex items-center justify-start gap-4">
            <Link to="/signin">
              <Button
                white
                onClick={closeProfileSidebar}
                className="h-[30px] w-[100px] rounded-[50px] font-poppins text-xs font-medium"
              >
                Sign in
              </Button>
            </Link>
            <Link to="/signup">
              <Button
                white
                onClick={closeProfileSidebar}
                className="h-[30px] w-[100px] rounded-[50px] font-poppins text-xs font-medium"
              >
                Sign up
              </Button>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default AccountSidebar;
