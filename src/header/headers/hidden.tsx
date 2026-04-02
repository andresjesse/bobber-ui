import { Stack } from "expo-router";
import {
  useSafeAreaInsets,
  type EdgeInsets,
} from "react-native-safe-area-context";

import { makeStyles } from "../../theme";

export function HiddenHeader() {
  const insets = useSafeAreaInsets();
  const styles = useStyles({ insets });

  return (
    <Stack.Screen
      options={{
        headerShown: false,
        contentStyle: styles.container,
        headerBackVisible: true,
        animation: "fade",
      }}
    />
  );
}

const useStyles = makeStyles((theme, props: { insets: EdgeInsets }) => ({
  container: {
    backgroundColor: theme.colors.background("auto"),
    paddingTop: props.insets.top,
  },
}));
