import { type TextStyle, View, type ViewStyle } from "react-native";

import { Text } from "../text";
import { makeStyles } from "../theme";
import { type Colors } from "../theme/theme.types";

type BadgeProps = {
  children: React.ReactNode;
  color?: keyof Colors;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  containerStyle?: ViewStyle;
  textStyle?: TextStyle;
};

export function Badge({
  children,
  color,
  size,
  containerStyle,
  textStyle,
}: BadgeProps) {
  const styles = useStyles({ color, size });

  const childComponent =
    typeof children === "string" ? (
      <Text style={[styles.text, textStyle]}>{children}</Text>
    ) : (
      children
    );

  return (
    <View style={[styles.container, containerStyle]}>{childComponent}</View>
  );
}

const paddings = {
  xs: {
    h: 4,
    v: 2,
  },
  sm: {
    h: 6,
    v: 3,
  },
  md: {
    h: 8,
    v: 4,
  },
  lg: {
    h: 12,
    v: 6,
  },
  xl: {
    h: 16,
    v: 8,
  },
};

const useStyles = makeStyles((theme, props: Omit<BadgeProps, "children">) => ({
  container: {
    paddingVertical: paddings[props.size ?? "xs"].v,
    paddingHorizontal: paddings[props.size ?? "xs"].h,
    borderRadius: theme.radius("default") * 2,
    backgroundColor: theme.colors.get(props.color ?? "primary", "background"),
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontWeight: "bold",
    fontSize: theme.fontSize(props.size ?? "default"),
    color: "#fff",
  },
}));
