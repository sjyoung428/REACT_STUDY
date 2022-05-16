import create from "zustand";

interface IStore {
  isDark: boolean;
  setIsDark: () => void;

  text: string;
  setText: (data: string) => void;

  name: string;
  setName: (data: string) => void;
}

export const useStore = create<IStore>((set) => ({
  isDark: false,
  setIsDark: () => set((state) => ({ isDark: !state.isDark })),

  text: "",
  setText: (data: string) => set(() => ({ text: data })),

  name: "",
  setName: (data: string) => set(() => ({ name: data })),
}));
