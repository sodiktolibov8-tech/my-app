import { create } from "zustand"

export const useAppStore = create((set) => ({
  theme: "light",

  toggleTheme: () =>
    set((s) => ({ theme: s.theme === "light" ? "dark" : "light" })),

}))
