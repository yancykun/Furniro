import { create } from "zustand";

type PasswordVisibilityState = {
  showPassword: boolean;
  togglePasswordVisibility: () => void;
};

export const usePasswordVisibilityStore = create<PasswordVisibilityState>(
  (set) => ({
    showPassword: false,
    togglePasswordVisibility: () =>
      set((state) => ({ showPassword: !state.showPassword })),
  }),
);
