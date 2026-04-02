import { type TextStyle } from "react-native";
import { useTheme } from "../theme";

const HEADINGS_RATIO = 1.067; // https://typescale.com/
const HEADINGS_LINE_HEIGHT_MULTIPLIER = 1.6;
const HEADINGS_DEFAULT_MARGIN_BOTTOM = 16; // 1rem
const HEADINGS_FIRST_CHILD_MARGIN_TOP = 36; // 2.25rem

const calcHeadingFontSize = (baseFontSize: number, h: number) => {
  let headingSize = baseFontSize;

  for (let i = 0; i < 7 - h; i++) {
    headingSize *= HEADINGS_RATIO;
  }

  return headingSize;
};

export const useHeadingStyle = (
  h1?: boolean,
  h2?: boolean,
  h3?: boolean,
  h4?: boolean,
  firstChild?: boolean
): TextStyle => {
  const { theme } = useTheme();

  let h = 0;
  if (h1) h = 1;
  else if (h2) h = 2;
  else if (h3) h = 3;
  else if (h4) h = 4;

  if (h === 0) return {};

  return {
    fontWeight: "bold",
    marginBottom: HEADINGS_DEFAULT_MARGIN_BOTTOM,
    marginTop: firstChild ? 0 : HEADINGS_FIRST_CHILD_MARGIN_TOP, // apply only if this headings is not first child,
    fontSize: calcHeadingFontSize(theme.fontSize("default"), h),
    lineHeight:
      calcHeadingFontSize(theme.fontSize("default"), h) *
      HEADINGS_LINE_HEIGHT_MULTIPLIER,
  };
};
