import { create } from "zustand";

interface FormStore {
  successMessage: string;
  setSuccessMessage: (message: string) => void;
  clearSuccessMessage: () => void;
}

const useFormStore = create<FormStore>((set) => ({
  successMessage: "",
  setSuccessMessage: (message) => set({ successMessage: message }),
  clearSuccessMessage: () => set({ successMessage: "" }),
}));

export default useFormStore;
