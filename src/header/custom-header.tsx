//@ts-ignore
import { NativeStackHeaderProps } from "@react-navigation/native-stack";
import { Pressable, View } from "react-native";
import {
  type EdgeInsets,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

import { Icon } from "../icon";
import { Text } from "../text";
import { makeStyles, useTheme } from "../theme";
import { useShadowStyle } from "../theme/default-styles";

export function CustomHeader(props: NativeStackHeaderProps) {
  const insets = useSafeAreaInsets();
  const styles = useStyles({ insets });
  const { theme } = useTheme();
  const { defaultShadow } = useShadowStyle();

  return (
    <View style={styles.container}>
      <View style={[styles.inner, defaultShadow]}>
        {props.navigation.canGoBack() && props.options.headerBackVisible ? (
          <Pressable
            onPress={() => props.navigation.goBack()}
            style={styles.back}
          >
            <Icon type="material" name="chevron-left" />
          </Pressable>
        ) : (
          <View />
        )}

        <Text
          fontWeight="bold"
          fontSize={theme.fontSize("default") + 2}
          style={styles.title}
        >
          {props.options.title}
        </Text>

        {props.options.headerRight?.({
          canGoBack: props.navigation.canGoBack(),
        })}
      </View>
    </View>
  );
}

const useStyles = makeStyles((theme, props: { insets: EdgeInsets }) => ({
  container: { backgroundColor: theme.colors.background("auto") },
  inner: {
    borderBottomLeftRadius: theme.radius("default"),
    borderBottomRightRadius: theme.radius("default"),
    backgroundColor: theme.colors.background("auto", 1),
    paddingTop: props.insets.top,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 24,
  },
  title: {
    flex: 1,
  },
  back: { marginRight: 16 },
}));
