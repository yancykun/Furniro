import { create } from "zustand";

type CartItem = {
  id: string;
  image: string;
  title: string;
  quantity: number;
  price: number;
};

type CartState = {
  cart: CartItem[];
  addToCart: (product: CartItem) => void;
  removeFromCart: (id: string) => void;
  getTotalPrice: () => number;
  itemCount: number;
};

export const useCartStore = create<CartState>((set, get) => ({
  cart: [],
  itemCount: 0,

  addToCart: (product: CartItem) => {
    set((state) => {
      const existingProduct = state.cart.find((item) => item.id === product.id);

      if (existingProduct) {
        return {
          cart: state.cart.map((item) =>
            item.id === product.id
              ? {
                  ...item,
                  quantity: item.quantity + product.quantity,
                }
              : item,
          ),
          itemCount:
            state.cart.reduce((count, item) => count + item.quantity, 0) +
            product.quantity,
        };
      }

      return {
        cart: [...state.cart, product],
        itemCount:
          state.cart.reduce((count, item) => count + item.quantity, 0) +
          product.quantity,
      };
    });
  },

  removeFromCart: (id: string) => {
    set((state) => {
      const removedItem = state.cart.find((item) => item.id === id);
      const newCart = state.cart.filter((item) => item.id !== id);

      return {
        cart: newCart,
        itemCount: state.itemCount - (removedItem ? removedItem.quantity : 0),
      };
    });
  },

  getTotalPrice: () => {
    return get().cart.reduce(
      (total, item) => total + item.price * item.quantity,
      0,
    );
  },
}));
