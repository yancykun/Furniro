import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "../../firebase";
import { useProfileSidebarStore } from "../../store/useProfileSidebarStore";
import { CgProfile } from "react-icons/cg";

const AccountProfile = () => {
  const [userPhoto, setUserPhoto] = useState("");
  const toggleProfileSidebar = useProfileSidebarStore(
    (state) => state.toggleProfileSidebar,
  );

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUserPhoto(user?.photoURL || "");
    });
    return unsubscribe;
  }, []);

  const handleClick = () => {
    toggleProfileSidebar();
  };

  return (
    <>
      {userPhoto ? (
        <img
          src={userPhoto}
          alt="Profile"
          className="cursor-pointer rounded-full"
          style={{ width: 23, height: 23 }}
          onClick={handleClick}
        />
      ) : (
        <CgProfile className="cursor-pointer" onClick={handleClick} size={21} />
      )}
    </>
  );
};

export default AccountProfile;
