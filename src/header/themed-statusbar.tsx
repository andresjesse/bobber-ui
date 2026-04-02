import { StatusBar, type StatusBarProps } from "expo-status-bar";
import { useTheme } from "../theme";

export function ThemedStatusBar({ ...rest }: StatusBarProps) {
  const { theme } = useTheme();

  return (
    <StatusBar
      style={theme.colorScheme === "dark" ? "light" : "dark"}
      {...rest}
    />
  );
}
