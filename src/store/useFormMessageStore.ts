import { create } from "zustand";

type FormMessageProps = {
  successMessage: string;
  setSuccessMessage: (message: string) => void;
  clearSuccessMessage: () => void;
};

export const useFormMessageStore = create<FormMessageProps>((set) => ({
  successMessage: "",
  setSuccessMessage: (message) => set({ successMessage: message }),
  clearSuccessMessage: () => set({ successMessage: "" }),
}));
