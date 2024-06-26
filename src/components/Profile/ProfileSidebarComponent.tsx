import { useProfileSidebarStore } from "../../store/useProfileSidebarStore";
import ProfileSidebar from "./ProfileSidebar";

const ProfileSidebarComponent = () => {
  const openProfile = useProfileSidebarStore((state) => state.openProfile);
  return (
    <>
      {openProfile && (
        <>
          <div className="fixed right-0 top-0 z-50 h-[190px] w-[80%] sm:w-[350px]">
            <ProfileSidebar />
          </div>
        </>
      )}
    </>
  );
};

export default ProfileSidebarComponent;
