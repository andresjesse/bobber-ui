import { type CustomTheme } from "@andresjesse/bobber-ui";

/**
 * Custom themes can override all props of the default theme.
 * Partial overrides are allowed.
 * Custom colors can be added also.
 */
export const myTheme: CustomTheme = {
  // colors
  colors: {
    brown: [
      "#FCF5EB",
      "#F5E0C3",
      "#E6CF9C",
      "#D9BC82",
      "#C4A66B",
      "#A3895A",
      "#8C784E",
      "#73613F",
      "#5A4A30",
      "#403423",
    ],
  },
  backgroundColor: {
    light: "brown",
    dark: "brown",
  },
  foregroundColor: {
    light: "brown",
    dark: "brown",
  },
  primaryColor: "brown",
  primaryShades: {
    light: {
      background: 5,
      foreground: 4,
    },
    dark: {
      background: 6,
      foreground: 4,
    },
  },

  // typography
  fontFamily: "monospace",
  baseFontSize: 14,
  defaultFontSize: "sm",

  // borders
  defaultRadius: "none",

  // spacing
  defaultSpacing: "sm",
};
