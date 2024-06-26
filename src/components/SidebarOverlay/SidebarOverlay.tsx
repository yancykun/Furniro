import { useCartSidebarStore } from "../../store/useCartSidebarStore";
import { useProfileSidebarStore } from "../../store/useProfileSidebarStore";

const SidebarOverlay = () => {
  const openCart = useCartSidebarStore((state) => state.openCart);
  const openProfile = useProfileSidebarStore((state) => state.openProfile);
  return (
    <>
      {openCart && (
        <>
          <div className="fixed inset-0 z-40 bg-color-7/40"></div>
        </>
      )}
      {openProfile && (
        <>
          <div className="fixed inset-0 z-40 bg-color-7/40"></div>
        </>
      )}
    </>
  );
};

export default SidebarOverlay;
