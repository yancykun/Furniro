import { create } from "zustand";

type LoginAlertMessageState = {
  loginAlertMessage: string;
  setShowLoginAlertMessage: (message: string) => void;
  clearLoginAlertMessage: () => void;
};

export const useLoginAlertMessage = create<LoginAlertMessageState>((set) => ({
  loginAlertMessage: "",
  setShowLoginAlertMessage: (message) => set({ loginAlertMessage: message }),
  clearLoginAlertMessage: () => set({ loginAlertMessage: "" }),
}));
