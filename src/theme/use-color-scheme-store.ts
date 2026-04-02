import AsyncStorage from "@react-native-async-storage/async-storage";
import { Platform } from "react-native";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

type State = {
  colorScheme: "light" | "dark" | null;
};

type Actions = {
  setColorScheme: (colorScheme: "light" | "dark") => void;
};

export const useColorSchemeStore = create<State & Actions>()(
  persist(
    (set) => ({
      colorScheme: null,
      setColorScheme: (colorScheme: "light" | "dark") => {
        return set(() => ({
          colorScheme,
        }));
      },
    }),
    {
      name: "color-scheme",
      storage: createJSONStorage(() =>
        Platform.OS === "web" ? localStorage : AsyncStorage
      ),
    }
  )
);
