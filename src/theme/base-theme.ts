import { BASE_COLORS } from "./colors";
import { type BaseTheme } from "./theme.types";

export const BASE_THEME: BaseTheme = {
  // colors
  colors: BASE_COLORS,
  backgroundColor: {
    light: "gray",
    dark: "gray",
  },
  foregroundColor: {
    light: "gray",
    dark: "gray",
  },
  primaryColor: "blue",
  primaryShades: {
    light: {
      background: 6,
      foreground: 6,
    },
    dark: {
      background: 8,
      foreground: 2,
    },
  },

  // typography
  fontFamily: "Roboto",
  baseFontSize: 15, // React Native default
  defaultFontSize: "md", // baseFontSize

  // borders
  radius: {
    xs: 2,
    sm: 4,
    md: 8,
    lg: 16,
    xl: 32,
  },
  defaultRadius: "lg",

  // spacing
  spacing: {
    xs: 10,
    sm: 12,
    md: 16,
    lg: 20,
    xl: 32,
  },
  defaultSpacing: "md",
};
