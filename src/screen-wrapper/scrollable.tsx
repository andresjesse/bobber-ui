import { type PropsWithChildren, useCallback, useState } from "react";
import { RefreshControl, View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-controller";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { Flex } from "../flex";
import { makeStyles, useTheme } from "../theme";

type ScrollableProps = {
  padding?: "xs" | "sm" | "md" | "lg" | "xl" | "none";
  gap?: number | "xs" | "sm" | "md" | "lg" | "xl";
  onRefresh?: () => Promise<void>;
} & PropsWithChildren;

export default function Scrollable({
  children,
  padding,
  gap,
  onRefresh,
}: ScrollableProps) {
  const { theme } = useTheme();
  const insets = useSafeAreaInsets();
  const styles = useStyles({ padding });

  const [refreshing, setRefreshing] = useState(false);

  const onRefreshWrapper = useCallback(async () => {
    if (onRefresh) {
      setRefreshing(true);
      await onRefresh();
      setRefreshing(false);
    }
  }, [onRefresh]);

  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView
        bottomOffset={insets.bottom}
        refreshControl={
          onRefresh ? (
            <RefreshControl
              refreshing={refreshing}
              onRefresh={onRefreshWrapper}
            />
          ) : undefined
        }
      >
        <Flex gap={gap ?? theme.spacing("default")} style={styles.padding}>
          {children}
        </Flex>
      </KeyboardAwareScrollView>
    </View>
  );
}

const useStyles = makeStyles(
  (
    theme,
    props: {
      padding?: "xs" | "sm" | "md" | "lg" | "xl" | "none";
    }
  ) => ({
    container: {
      flex: 1,
      backgroundColor: theme.colors.background("auto"),
    },
    padding: {
      padding:
        props.padding !== "none"
          ? theme.spacing(props.padding ?? "default")
          : undefined,
    },
  })
);
