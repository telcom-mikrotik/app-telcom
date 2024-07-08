import { StateCreator, create } from "zustand";
import { ConfiurationState } from "@interfaces/globlal-interfaces";
import { devtools } from "zustand/middleware";

const storeApi: StateCreator<ConfiurationState> = (set) => ({
    isOpen: false,
    setOpen: (isOpen: boolean) => set({ isOpen }),
});

export const useConfigurationStore = create<ConfiurationState>()(
    devtools(
        storeApi
    )
)