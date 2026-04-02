import {
  type ColorValue,
  Text as RNText,
  type StyleProp,
  type TextStyle,
} from "react-native";

import { useTheme } from "../theme";
import { useHeadingStyle } from "./heading";

type HeadingProps =
  | { h1?: never; h2?: never; h3?: never; h4?: never; firstChild?: never }
  | { h1: true; h2?: never; h3?: never; h4?: never; firstChild?: boolean }
  | { h2: true; h1?: never; h3?: never; h4?: never; firstChild?: boolean }
  | { h3: true; h1?: never; h2?: never; h4?: never; firstChild?: boolean }
  | { h4: true; h1?: never; h2?: never; h3?: never; firstChild?: boolean };

type TextProps = {
  children: React.ReactNode;
  color?: ColorValue;
  fontSize?: number;
  fontWeight?: TextStyle["fontWeight"];
  fontStyle?: TextStyle["fontStyle"];
  textAlign?: TextStyle["textAlign"];
  style?: StyleProp<TextStyle>;
} & HeadingProps;

export function Text({
  children,
  color,
  fontSize,
  fontWeight,
  fontStyle,
  textAlign,
  style: customStyle,
  h1,
  h2,
  h3,
  h4,
  firstChild,
}: TextProps) {
  const { theme } = useTheme();
  const headingStyle = useHeadingStyle(h1, h2, h3, h4, firstChild);

  const defaultTextStyle: StyleProp<TextStyle> = {
    color: color || theme.colors.foreground("auto"),
    fontSize: fontSize || theme.fontSize("default"),
    fontWeight: fontWeight || "normal",
    fontStyle: fontStyle || "normal",
    textAlign: textAlign || "left",
    fontFamily: theme.fontFamily,
  };

  return (
    <RNText style={[defaultTextStyle, headingStyle, customStyle]}>
      {children}
    </RNText>
  );
}
