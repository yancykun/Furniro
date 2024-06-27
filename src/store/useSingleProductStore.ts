import { create } from "zustand";

type SingleProductState = {
  count: number;
  increment: () => void;
  decrement: () => void;
  resetCount: () => void;
};

export const useSingleProductStore = create<SingleProductState>((set) => ({
  count: 1,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () =>
    set((state) => (state.count > 1 ? { count: state.count - 1 } : state)),
  resetCount: () => set({ count: 1 }),
}));
