import { Dimensions, Pressable } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-controller";

import { type PropsWithChildren } from "react";
import {
  type EdgeInsets,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import { Flex } from "../../flex";
import { makeStyles } from "../../theme";

type WindowedOverlayProps = {
  keyboardAware?: boolean;
} & PropsWithChildren;

export default function WindowedOverlay({
  keyboardAware = true,
  children,
}: WindowedOverlayProps) {
  const insets = useSafeAreaInsets();
  const styles = useStyles({ insets });

  if (keyboardAware)
    return (
      <KeyboardAwareScrollView
        bottomOffset={insets.bottom}
        style={styles.container}
        keyboardShouldPersistTaps="handled"
      >
        <Pressable
          onPress={(e) => {
            e.stopPropagation();
          }}
        >
          <Flex gap="md" style={styles.flex}>
            {children}
          </Flex>
        </Pressable>
      </KeyboardAwareScrollView>
    );

  return (
    <Pressable
      style={styles.container}
      onPress={(e) => {
        e.stopPropagation();
      }}
    >
      <Flex gap="md" style={styles.flex}>
        {children}
      </Flex>
    </Pressable>
  );
}

const TOP_OFFSET = 64;

const useStyles = makeStyles((theme, props: { insets: EdgeInsets }) => ({
  container: {
    position: "absolute",
    top: TOP_OFFSET,
    marginHorizontal: theme.spacing("default"),
    width: Dimensions.get("window").width - theme.spacing("default") * 2,
    maxHeight: Dimensions.get("window").height - TOP_OFFSET - props.insets.top,
    backgroundColor: theme.colors.background("auto"),
    borderRadius: theme.radius("default"),
    cursor: "auto",
  },
  flex: {
    padding: theme.spacing("default"),
  },
}));
