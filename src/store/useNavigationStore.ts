import { create } from "zustand"

type NavigationProps = {
    openNavigation: boolean,
    toggleNavigation: () => void
    closeNavigation: () => void
}

export const useNavigationStore = create<NavigationProps>((set) => ({
    openNavigation: false,
    toggleNavigation: () => set((state) => ({openNavigation: !state.openNavigation})),
    closeNavigation: () => set({openNavigation: false})
}))