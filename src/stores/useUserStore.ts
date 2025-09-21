import { create } from "zustand";

type UserStore = {
  userName: string | null;
  login: (userName: string) => void;
  logout: () => void;
};

const useUserStore = create<UserStore>((set) => {
  return {
    userName: null,
    login: (userName) => set(() => ({ userName })),
    logout: () => set(() => ({ userName: null })),
  };
});

export default useUserStore;
