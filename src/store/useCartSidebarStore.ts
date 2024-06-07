import { create } from "zustand";

type CartSidebarProps = {
  openCart: boolean;
  toggleCartSidebar: () => void;
  closeCartSidebar: () => void;
};

export const useCartSidebarStore = create<CartSidebarProps>((set) => ({
  openCart: false,
  toggleCartSidebar: () => set((state) => ({ openCart: !state.openCart })),
  closeCartSidebar: () => set({ openCart: false }),
}));
