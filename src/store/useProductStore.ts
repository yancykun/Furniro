import { create } from "zustand";
import { Product } from "../types/types";
import { products as initialProducts } from "../constants";

type ProductStore = {
  products: Product[];
  filteredProducts: Product[];
  featuredProducts: Product[];
  showMore: boolean;
  visibleProducts: number;
  handleShowMore: () => void;
  filteredProductsByCategory: (category: string) => void;
  getFeaturedProducts: () => void;
};

export const useProductStore = create<ProductStore>((set, get) => ({
  products: initialProducts,
  filteredProducts: initialProducts,
  featuredProducts: initialProducts,
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
    set((state) => ({
      featuredProducts: state.products
        .filter((product) => product.isFeatured)
        .sort((a, b) => b.popularity - a.popularity),
    }));
  },
}));
