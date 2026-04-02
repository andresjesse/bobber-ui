import { useFocusEffect } from "expo-router";
import { type PropsWithChildren, useCallback, useState } from "react";
import { Dimensions, Pressable, TouchableOpacity } from "react-native";

import {
  type EdgeInsets,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import { Flex } from "../../flex";
import { Icon } from "../../icon";
import { makeStyles, useTheme } from "../../theme";
import { useShadowStyle } from "../../theme/default-styles";

export default function HeaderMenuContainer({ children }: PropsWithChildren) {
  const insets = useSafeAreaInsets();
  const styles = useStyles({ insets });
  const { theme } = useTheme();
  const { defaultShadow } = useShadowStyle();

  const [visible, setVisible] = useState(false);

  useFocusEffect(
    useCallback(() => {
      setVisible(false);
    }, [])
  );

  return (
    <>
      <TouchableOpacity onPress={() => setVisible(true)}>
        {visible ? (
          <Icon
            type="material"
            name="menu-open"
            style={styles.menuTouchable}
            size={32}
          />
        ) : (
          <Icon
            type="material"
            name="menu"
            style={styles.menuTouchable}
            size={32}
          />
        )}
      </TouchableOpacity>

      {visible && (
        <Pressable
          onPress={() => setVisible(false)}
          style={styles.backdropStyle}
        >
          <Pressable style={[styles.overlayStyle, defaultShadow]}>
            <Flex gap={theme.spacing("default")}>{children}</Flex>
          </Pressable>
        </Pressable>
      )}
    </>
  );
}

const useStyles = makeStyles((theme, props: { insets: EdgeInsets }) => ({
  menuTouchable: {
    padding: 8,
  },
  backdropStyle: {
    position: "absolute",
    top: 0,
    left: 0,
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
    justifyContent: "flex-start",
    alignItems: "flex-end",
    backgroundColor: theme.colors.select(
      "rgba(0, 0, 0, 0.1)",
      "rgba(0, 0, 0, 0.25)"
    ),
  },
  overlayStyle: {
    borderRadius: theme.radius("default"),
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    padding: theme.spacing("md"),
    marginTop: props.insets.top + theme.spacing("sm"),
    backgroundColor: theme.colors.background("auto"),
  },
}));
