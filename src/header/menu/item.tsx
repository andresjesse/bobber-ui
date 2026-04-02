import { TouchableOpacity } from "react-native";

import { Icon, type IconType } from "../../icon";
import { Text } from "../../text";
import { makeStyles } from "../../theme";

type HeaderMenuItemProps = {
  icon: IconType;
  title: string;
  onPress: () => void;
};

export default function HeaderMenuItem({
  icon,
  title,
  onPress,
}: HeaderMenuItemProps) {
  const styles = useStyles();

  return (
    <TouchableOpacity style={styles.item} onPress={onPress}>
      <Text>{title}</Text>
      <Icon {...icon} />
    </TouchableOpacity>
  );
}

const useStyles = makeStyles((theme) => ({
  item: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    gap: theme.spacing("default"),
  },
}));
