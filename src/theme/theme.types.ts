// Types definition is based on mantine.ui theming system.

type BaseColors =
  | "dark"
  | "gray"
  | "red"
  | "pink"
  | "grape"
  | "violet"
  | "indigo"
  | "blue"
  | "cyan"
  | "teal"
  | "green"
  | "lime"
  | "yellow"
  | "orange"
  | (string & {});

type ColorsTuple = readonly [
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  ...string[]
];

interface ColorsOverride {}

export type Colors = ColorsOverride extends {
  colors: Record<infer CustomColors, ColorsTuple>;
}
  ? Record<CustomColors, ColorsTuple>
  : Record<BaseColors, ColorsTuple>;

export type BaseTheme = {
  // colors
  colors: Partial<Colors>;
  backgroundColor: {
    light: keyof Colors;
    dark: keyof Colors;
  };
  foregroundColor: {
    light: keyof Colors;
    dark: keyof Colors;
  };
  primaryColor: keyof Colors;
  primaryShades: {
    light: {
      background: number;
      foreground: number;
    };
    dark: {
      background: number;
      foreground: number;
    };
  };

  // typography
  fontFamily: string;
  baseFontSize: number;
  defaultFontSize: "xs" | "sm" | "md" | "lg" | "xl";

  // borders
  radius: {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
  };
  defaultRadius: "xs" | "sm" | "md" | "lg" | "xl" | "none";

  // spacing
  spacing: {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
  };
  defaultSpacing: "xs" | "sm" | "md" | "lg" | "xl";
};

export type CustomTheme = Partial<BaseTheme>;
