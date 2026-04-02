import { createContext, type ReactNode, useContext, useMemo } from "react";

import { BASE_THEME } from "./base-theme";
import { buildTheme } from "./build-theme";
import { type CustomTheme } from "./theme.types";
import { useColorSchemeStore } from "./use-color-scheme-store";

interface ThemeContextProps {
  theme: ReturnType<typeof buildTheme>;
  toggleColorScheme: () => void;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

interface ThemeContextProviderProps {
  children: ReactNode;
  customTheme?: CustomTheme;
  defaultColorScheme?: "light" | "dark";
}

export function ThemeProvider({
  customTheme,
  children,
  defaultColorScheme = "light",
}: ThemeContextProviderProps) {
  const { colorScheme, setColorScheme } = useColorSchemeStore();

  const toggleColorScheme = () => {
    setColorScheme(colorScheme === "light" ? "dark" : "light");
  };

  const theme = useMemo(() => {
    const baseTheme = {
      ...BASE_THEME,
      ...customTheme,
      colors: {
        ...BASE_THEME.colors,
        ...customTheme?.colors,
      },
    };

    return buildTheme(baseTheme, colorScheme || defaultColorScheme);
  }, [customTheme, defaultColorScheme, colorScheme]);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleColorScheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);

  if (!ctx)
    throw new Error("useTheme must be used inside ThemeContextProvider");

  return ctx;
}
