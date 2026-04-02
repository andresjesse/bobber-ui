import { type PropsWithChildren } from "react";
import { Dimensions, Pressable } from "react-native";

import { makeStyles } from "../theme";

type BackdropProps = {
  onPress: () => void;
  transparent: boolean;
} & PropsWithChildren;

export default function Backdrop({
  onPress,
  transparent,
  children,
}: BackdropProps) {
  const styles = useStyles({ transparent });

  return (
    <Pressable onPress={onPress} style={styles.backdrop}>
      {children}
    </Pressable>
  );
}

const useStyles = makeStyles((_, props: { transparent: boolean }) => ({
  backdrop: {
    backgroundColor: props.transparent ? "transparent" : "rgba(0, 0, 0, 0.5)",
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    width: Dimensions.get("window").width,
    zIndex: 9000,
  },
}));
