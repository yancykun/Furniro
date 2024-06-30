/**
 * Zustand store for managing the shopping cart state.
 *
 * This store handles the cart operations, such as adding and removing items, 
 * calculating the total price, and persisting the cart state in local storage.
 *
 * Dependencies:
 * - Zustand: State management library
 * - Zustand/middleware: Middleware for Zustand, used for persisting state

 * Types:
 * - CartItem: Represents an item in the cart with its properties
 * - CartState: Represents the state and actions for the cart
 */

import { create } from "zustand";
import { persist } from "zustand/middleware";
import { useSingleProductStore } from "./useSingleProductStore";

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
  clearCart: () => void;
};

// Zustand store for the cart state
export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      cart: [],
      itemCount: 0,

      /**
       * Adds a product to the cart.
       * If the product already exists in the cart, its quantity is updated.
       * Otherwise, the product is added to the cart.
       *
       * @param product - The product to add to the cart
       */
      addToCart: (product: CartItem) => {
        set((state) => {
          // Check if the product already exists in the cart
          const existingProduct = state.cart.find(
            (item) => item.id === product.id,
          );

          if (existingProduct) {
            // Update the quantity of the existing product
            return {
              cart: state.cart.map((item) =>
                item.id === product.id
                  ? {
                      ...item,
                      quantity: item.quantity + product.quantity,
                    }
                  : item,
              ),
              // Update the item count
              itemCount:
                state.cart.reduce((count, item) => count + item.quantity, 0) +
                product.quantity,
            };
          }

          // Add the new product to the cart
          return {
            cart: [...state.cart, product],
            // Update the item count
            itemCount:
              state.cart.reduce((count, item) => count + item.quantity, 0) +
              product.quantity,
          };
        });

        // Reset the item count when the item is added to the cart
        useSingleProductStore.getState().resetCount();
      },

      /**
       * Removes a product from the cart by its ID.
       * If the product exists in the cart, it is removed and the item count is updated.
       *
       * @param id - The ID of the product to remove
       */
      removeFromCart: (id: string) => {
        set((state) => {
          // Find the product to remove
          const removedItem = state.cart.find((item) => item.id === id);
          // Filter out the product from the cart
          const newCart = state.cart.filter((item) => item.id !== id);

          return {
            cart: newCart,
            // Update the item count
            itemCount:
              state.itemCount - (removedItem ? removedItem.quantity : 0),
          };
        });
      },

      /**
       * Calculates the total price of items in the cart.
       *
       * @returns The total price of all items in the cart
       */
      getTotalPrice: () => {
        return get().cart.reduce(
          (total, item) => total + item.price * item.quantity,
          0,
        );
      },
      /**
       * Clears all items from the cart and resets the item count
       * when the items in cart is being checked out
       */
      clearCart: () => set({ cart: [], itemCount: 0 }),
    }),
    {
      // Persist the cart state in local storage
      name: "cart-storage", // name of the item in the storage (must be unique)
      getStorage: () => localStorage, // (optional) by default, 'localStorage' is used
    },
  ),
);
