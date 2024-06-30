/**
 * SidebarOverlay Component
 *
 * This component renders an overlay when either the cart sidebar or the profile sidebar is open.
 * The overlay is a semi-transparent background that covers the entire screen.
 *
 */

import { useCartSidebarStore } from "../../store/useCartSidebarStore";
import { useProfileSidebarStore } from "../../store/useProfileSidebarStore";

// SidebarOverlay Component
const SidebarOverlay = () => {
  const openCart = useCartSidebarStore((state) => state.openCart); // State to check if the cart sidebar is open
  const openProfile = useProfileSidebarStore((state) => state.openProfile); // State to check if the profile sidebar is open

  return (
    <>
      {openCart && <div className="fixed inset-0 z-40 bg-color-7/40"></div>}
      {openProfile && <div className="fixed inset-0 z-40 bg-color-7/40"></div>}
    </>
  );
};

export default SidebarOverlay;
