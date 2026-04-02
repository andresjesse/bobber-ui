import { type ReactNode } from "react";
import {
  type StyleProp,
  type TextStyle,
  TouchableOpacity,
  type TouchableOpacityProps,
  type ViewStyle,
} from "react-native";

import { Flex } from "../flex";
import { Text } from "../text";
import { makeStyles } from "../theme";
import { useDisabledStyles } from "../theme/default-styles";
import { hexToRgba } from "../theme/helpers";
import { type Colors } from "../theme/theme.types";

export type ButtonProps = {
  title: string;
  variant?: "filled" | "light" | "outline" | "subtle";
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  color?: keyof Colors;
  fullWidth?: boolean;
  containerStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  leftSection?: ReactNode;
  rightSection?: ReactNode;
  justify?: "flex-start" | "flex-end" | "center" | "space-between";
  disabled?: boolean;
} & Omit<TouchableOpacityProps, "style">;

export function Button({
  title,
  variant = "filled",
  size = "md",
  color,
  fullWidth = false,
  containerStyle,
  textStyle,
  leftSection,
  rightSection,
  justify,
  disabled = false,
  ...rest
}: ButtonProps) {
  const styles = useStyles({ variant, size, color, fullWidth });
  const disabledStyles = useDisabledStyles();

  return (
    <TouchableOpacity
      style={[
        styles.container,
        styles[variant],
        disabled && disabledStyles.button,
        containerStyle,
      ]}
      disabled={disabled}
      {...rest}
    >
      <Flex direction="row" align="center" justify={justify ?? "center"}>
        {leftSection}

        <Text
          style={[
            styles.text,
            styles[`${variant}Text`],
            disabled && disabledStyles.text,
            textStyle,
          ]}
        >
          {title}
        </Text>

        {rightSection}
      </Flex>
    </TouchableOpacity>
  );
}

const useStyles = makeStyles((theme, props: Omit<ButtonProps, "title">) => ({
  // base
  container: {
    padding: theme.spacing(props.size ?? "default"),
    borderRadius: theme.radius("default"),
    flexGrow: props.fullWidth ? 1 : undefined,
  },
  text: {
    fontWeight: "bold",
    fontSize: theme.fontSize(props.size ?? "default"),
  },
  // variants
  filled: {
    backgroundColor: theme.colors.get(props.color ?? "primary", "background"),
  },
  filledText: {
    color: "#fff",
  },
  light: {
    backgroundColor: hexToRgba(
      theme.colors.get(props.color ?? "primary", "background")!,
      theme.colorScheme === "dark" ? 0.15 : 0.1
    ),
  },
  lightText: {
    color: theme.colors.get(props.color ?? "primary"),
  },
  outline: {
    borderWidth: 1,
    borderColor: theme.colors.get(props.color ?? "primary"),
  },
  outlineText: {
    color: theme.colors.get(props.color ?? "primary"),
  },
  subtle: {
    backgroundColor: "transparent",
  },
  subtleText: {
    color: theme.colors.get(props.color ?? "primary"),
  },
}));
