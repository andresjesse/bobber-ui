import { useState } from "react";
import {
  Pressable,
  type StyleProp,
  type TextStyle,
  TouchableOpacity,
  type ViewStyle,
} from "react-native";

import { Flex, type FlexProps } from "../flex";
import { DEFAULT_STRINGS } from "../lang/default-strings";
import { Text } from "../text";
import { makeStyles } from "../theme";

type ToggleableContentProps = {
  header?: { open: string; closed: string };
  style?: StyleProp<ViewStyle>;
  headerStyle?: StyleProp<TextStyle>;
  gap?: number | "xs" | "sm" | "md" | "lg" | "xl";
  openByDefault?: boolean;
} & FlexProps;

export function ToggleableContent({
  children,
  header = { open: DEFAULT_STRINGS.seeLess, closed: DEFAULT_STRINGS.seeMore },
  style,
  headerStyle,
  gap = "xs",
  openByDefault,
}: ToggleableContentProps) {
  const styles = useStyles();
  const [open, setOpen] = useState(openByDefault ?? false);

  return (
    <TouchableOpacity
      style={style}
      onPress={() => {
        setOpen(!open);
      }}
    >
      <Flex gap={gap}>
        <Text
          fontSize={11}
          textAlign="center"
          style={[styles.header, headerStyle]}
        >
          {open ? header.open : header.closed}
        </Text>

        <Pressable>
          <Flex gap={gap}>{open && children}</Flex>
        </Pressable>
      </Flex>
    </TouchableOpacity>
  );
}

const useStyles = makeStyles((theme) => ({
  header: {
    color: theme.colors.get("gray", [6, 5]),
  },
}));
