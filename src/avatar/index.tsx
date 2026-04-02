import { Image, type ImageStyle } from "react-native";

import { makeStyles } from "../theme";

type AvatarProps = {
  avatarUrl: string;
  size?: number;
  style?: ImageStyle;
};

export function Avatar({ avatarUrl, size = 64, style }: AvatarProps) {
  const styles = useStyles({ size });

  return <Image style={[styles.avatar, style]} source={{ uri: avatarUrl }} />;
}

const useStyles = makeStyles((_, props: { size: number }) => ({
  avatar: {
    width: props.size,
    height: props.size,
    borderRadius: props.size / 2,
  },
}));
