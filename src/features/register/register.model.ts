import { create } from 'zustand';

type RegisterModel = {
  isRegisterOpen: boolean;
  setIsRegisterOpen: (val: boolean) => void;
};

export const useRegisterModel = create<RegisterModel>((set) => ({
  isRegisterOpen: false,
  setIsRegisterOpen: (val: boolean) => set(() => ({ isRegisterOpen: val })),
}));
