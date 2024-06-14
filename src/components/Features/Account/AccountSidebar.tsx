import { useEffect, useState } from "react";
import { CgProfile } from "react-icons/cg";
import Button from "../../UI/Button";
import { Link, useNavigate } from "react-router-dom";
import { useProfileSidebarStore } from "../../../store/useProfileSidebarStore";
import { auth } from "../../../firebase"; // Adjust the path according to your file structure
import { onAuthStateChanged, signOut } from "firebase/auth";

const AccountSidebar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const [userPhoto, setUserPhoto] = useState("");
  const closeProfileSidebar = useProfileSidebarStore(
    (state) => state.closeProfileSidebar,
  );
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsLoggedIn(true);
        setUserEmail(user.email || "");
        setUserPhoto(user.photoURL || "");
        navigate("/"); // Redirect to home page
      } else {
        setIsLoggedIn(false);
        setUserEmail("");
        setUserPhoto("");
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      closeProfileSidebar();
      navigate("/signin"); // Redirect to home page after logout
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  return (
    <>
      {isLoggedIn ? (
        <>
          <div className="flex items-center gap-2 sm:gap-4">
            {userPhoto ? (
              <img
                src={userPhoto}
                alt="Profile"
                height={35}
                width={35}
                className="cursor-pointer rounded-full"
              />
            ) : (
              <CgProfile className="cursor-pointer" size={35} />
            )}
            <p className="font-poppins text-sm text-color-6 sm:text-base">
              {userEmail}
            </p>
          </div>
          <div className="mt-6 flex gap-4">
            <Link to="/cart">
              <Button
                white
                onClick={closeProfileSidebar}
                className="h-[30px] w-[120px] rounded-[50px] font-poppins text-xs font-medium"
              >
                Cart
              </Button>
            </Link>
            <Button
              white
              onClick={handleLogout}
              className="h-[30px] w-[120px] rounded-[50px] font-poppins text-xs font-medium"
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
                className="h-[30px] w-[120px] rounded-[50px] font-poppins text-xs font-medium"
              >
                Sign in
              </Button>
            </Link>
            <Link to="/signup">
              <Button
                white
                onClick={closeProfileSidebar}
                className="h-[30px] w-[120px] rounded-[50px] font-poppins text-xs font-medium"
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
