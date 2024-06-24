import { create } from "zustand";

type ProductVisibilityStore = {
  visibleProducts: number;
  showMore: boolean;
  handleShowMore: (totalProducts: number) => void;
};

export const useProductVisibilityStore = create<ProductVisibilityStore>(
  (set, get) => ({
    visibleProducts: 6,
    showMore: true,
    handleShowMore: (totalProducts: number) => {
      const { visibleProducts } = get();
      if (visibleProducts >= totalProducts) {
        set({ visibleProducts: 6, showMore: true });
      } else {
        const newVisibleProducts = visibleProducts + 6;
        set({
          visibleProducts: newVisibleProducts,
          showMore: newVisibleProducts < totalProducts,
        });
      }
    },
  }),
);
