import { type BaseTheme } from "./theme.types";

/**
 *  Converts a hex color to rgba.
 * @param hex hex color string.
 * @param alpha opacity.
 * @returns rgba color string.
 */
export const hexToRgba = (hex: string, alpha: number) => {
  hex = hex.replace(/^#/, "");

  if (hex.length === 3) {
    hex = hex[0]! + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
  }

  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);

  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

/**
 * Converts a size key to a numeric fontSize.
 * @param size standardized size key.
 * @returns numeric fontSize.
 */
export const sizeToFontSize = (
  theme: BaseTheme,
  size: "xs" | "sm" | "md" | "lg" | "xl"
) => {
  switch (size) {
    case "xs":
      return theme.baseFontSize - 4;
    case "sm":
      return theme.baseFontSize - 2;
    case "md":
      return theme.baseFontSize;
    case "lg":
      return theme.baseFontSize + 2;
    case "xl":
      return theme.baseFontSize + 4;
  }
};
