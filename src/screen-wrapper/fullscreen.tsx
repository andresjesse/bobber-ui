import { type PropsWithChildren } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-controller";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { View } from "react-native";
import { Flex } from "../flex";
import { makeStyles, useTheme } from "../theme";

type FullscreenProps = {
  center?: boolean;
  padding?: "xs" | "sm" | "md" | "lg" | "xl" | "none";
  gap?: number | "xs" | "sm" | "md" | "lg" | "xl";
  keyboardAware?: boolean;
} & PropsWithChildren;

export default function Fullscreen({
  children,
  center = false,
  padding,
  gap,
  keyboardAware = true,
}: FullscreenProps) {
  const { theme } = useTheme();
  const insets = useSafeAreaInsets();
  const styles = useStyles({ padding, center });

  if (keyboardAware)
    return (
      <KeyboardAwareScrollView
        bottomOffset={insets.bottom}
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
      >
        <Flex gap={gap ?? theme.spacing("default")} style={styles.flex}>
          {children}
        </Flex>
      </KeyboardAwareScrollView>
    );

  return (
    <View style={[styles.container, styles.contentContainer]}>
      <Flex gap={gap ?? theme.spacing("default")} style={styles.flex}>
        {children}
      </Flex>
    </View>
  );
}

const useStyles = makeStyles(
  (
    theme,
    props: {
      center: boolean;
      padding?: "xs" | "sm" | "md" | "lg" | "xl" | "none";
    }
  ) => ({
    container: {
      flex: 1,
      backgroundColor: theme.colors.background("auto"),
    },
    contentContainer: {
      flex: 1,
      justifyContent: props.center ? "center" : undefined,
      alignItems: props.center ? "center" : undefined,
    },
    flex: {
      width: "100%",
      padding:
        props.padding !== "none"
          ? theme.spacing(props.padding ?? "default")
          : undefined,
    },
  })
);
