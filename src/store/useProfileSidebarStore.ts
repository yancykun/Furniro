import { create } from "zustand";

type useProfileSidebarProps = {
  openProfile: boolean;
  toggleProfileSidebar: () => void;
  closeProfileSidebar: () => void;
};

export const useProfileSidebarStore = create<useProfileSidebarProps>((set) => ({
  openProfile: false,
  toggleProfileSidebar: () =>
    set((state) => ({ openProfile: !state.openProfile })),
  closeProfileSidebar: () => set({ openProfile: false }),
}));
