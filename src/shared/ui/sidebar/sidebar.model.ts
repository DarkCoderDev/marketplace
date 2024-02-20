import { create } from 'zustand';

type SidebarModel = {
  isOpen: boolean;
  toggleIsOpen: () => void;
  setIsOpen: (val: boolean) => void;
};

export const useSidebarModel = create<SidebarModel>((set) => ({
  isOpen: false,
  toggleIsOpen: () => set((state) => ({ isOpen: !state.isOpen })),
  setIsOpen: (val: boolean) => set(() => ({ isOpen: val })),
}));
