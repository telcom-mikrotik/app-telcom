import { StateCreator, create } from "zustand";
import { ThemeState } from "@interfaces/globlal-interfaces";
import { devtools, persist } from "zustand/middleware";

const storeApi: StateCreator<ThemeState> = (set) => ({
  theme: false,
  setTheme: (theme: boolean) => set({ theme }),
});

export const useThemeStore = create<ThemeState>()(
  devtools(persist(storeApi, { name: "theme-ui" }))
);
