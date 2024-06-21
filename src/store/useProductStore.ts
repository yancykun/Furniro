// useProductStore.ts
import { create } from "zustand";
import { Product } from "../types/types";
import { fetchProductsFromFirestore } from "../services/productService";

type ProductStore = {
  products: Product[];
  visibleProducts: number;
  showMore: boolean;
  handleShowMore: () => void;
  fetchProducts: () => void;
};

export const useProductStore = create<ProductStore>((set, get) => ({
  products: [],
  visibleProducts: 6,
  showMore: true,

  handleShowMore: () => {
    const state = get();
    if (state.visibleProducts >= state.products.length) {
      set({
        visibleProducts: 6,
        showMore: true,
      });
    } else {
      const newVisibleProducts = state.visibleProducts + 6;
      set({
        visibleProducts: newVisibleProducts,
        showMore: newVisibleProducts < state.products.length,
      });
    }
  },

  fetchProducts: async () => {
    const products = await fetchProductsFromFirestore();
    set({
      products,
    });
  },
}));

useProductStore.getState().fetchProducts();
