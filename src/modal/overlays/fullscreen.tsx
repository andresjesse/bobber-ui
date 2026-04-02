import { type PropsWithChildren } from "react";
import { Dimensions, Pressable } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-controller";
import {
  type EdgeInsets,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

import { Flex } from "../../flex";
import { makeStyles } from "../../theme";

export default function FullscreenOverlay({ children }: PropsWithChildren) {
  const insets = useSafeAreaInsets();
  const styles = useStyles({ insets });

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
}

const TOP_OFFSET = 64;

const useStyles = makeStyles((theme, props: { insets: EdgeInsets }) => ({
  container: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    maxHeight: Dimensions.get("window").height - TOP_OFFSET - props.insets.top,
    backgroundColor: theme.colors.background("auto"),
    borderRadius: 0,
    borderTopLeftRadius: theme.radius("default"),
    borderTopRightRadius: theme.radius("default"),
    cursor: "auto",
  },
  flex: {
    padding: theme.spacing("default"),
  },
}));
