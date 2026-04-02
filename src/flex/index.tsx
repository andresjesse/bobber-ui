import { type ReactNode } from "react";
import { type FlexStyle, View, type ViewProps } from "react-native";

import { useTheme } from "../theme";

export type FlexProps = {
  children: ReactNode;
  direction?: "row" | "column" | "row-reverse" | "column-reverse";
  align?: "flex-start" | "flex-end" | "center" | "stretch";
  gap?: number | "xs" | "sm" | "md" | "lg" | "xl";
  justify?: "flex-start" | "flex-end" | "center" | "space-between";
  shrink?: number;
  grow?: number;
  wrap?: FlexStyle["flexWrap"];
} & ViewProps;

export function Flex({
  children,
  direction = "column",
  align,
  gap,
  justify,
  shrink,
  grow,
  wrap,
  style,
  ...rest
}: FlexProps) {
  const { theme } = useTheme();

  const numericGap =
    gap !== undefined
      ? typeof gap === "string"
        ? theme.spacing(gap)
        : gap
      : theme.spacing("xl");

  return (
    <View
      style={[
        {
          flexDirection: direction,
          gap: numericGap,
          alignItems: align,
          justifyContent: justify,
          flexShrink: shrink,
          flexGrow: grow,
          flexWrap: wrap,
        },
        style,
      ]}
      {...rest}
    >
      {children}
    </View>
  );
}
