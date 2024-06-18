// useProductStore.ts
import { create } from "zustand";
import { Product } from "../types/types";
import { fetchProductsFromFirestore } from "../services/productService";

type ProductStore = {
  products: Product[];
  filteredProducts: Product[];
  featuredProducts: Product[];
  visibleProducts: number;
  showMore: boolean;
  handleShowMore: () => void;
  filteredProductsByCategory: (category: string) => void;
  getFeaturedProducts: () => void;
  fetchProducts: () => void;
};

export const useProductStore = create<ProductStore>((set, get) => ({
  products: [],
  filteredProducts: [],
  featuredProducts: [],
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
  filteredProductsByCategory: (category) => {
    set((state) => ({
      filteredProducts: state.products.filter(
        (product) => product.category === category,
      ),
    }));
  },
  getFeaturedProducts: () => {
    const state = get();
    const featuredProducts = state.products
      .filter((product) => product.featured)
      .sort((a, b) => b.popularity - a.popularity);
    set({ featuredProducts });
  },
  fetchProducts: async () => {
    const products = await fetchProductsFromFirestore();
    set({
      products,
      filteredProducts: products,
      featuredProducts: products
        .filter((product) => product.featured)
        .sort((a, b) => b.popularity - a.popularity),
    });
  },
}));

// Call fetchProducts when the store initializes
useProductStore.getState().fetchProducts();
