import { useProfileSidebarStore } from "../../store/useProfileSidebarStore";
import { IoMdClose } from "react-icons/io";
import AccountSidebar from "../Account/AccountSidebar";

const ProfileSidebar = () => {
  const closeProfileSidebar = useProfileSidebarStore(
    (state) => state.closeProfileSidebar,
  );

  return (
    <div className="relative flex h-full flex-col bg-color-1 shadow-lg">
      <div className="px-6 py-4">
        <div className="mb-4 flex justify-end border-b border-color-6/30 pb-4">
          <IoMdClose
            className="cursor-pointer"
            size={25}
            onClick={closeProfileSidebar}
          />
        </div>
        <AccountSidebar />
      </div>
    </div>
  );
};

export default ProfileSidebar;
