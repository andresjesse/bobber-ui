import { Dimensions, TouchableOpacity } from "react-native";

import { Avatar } from "../../avatar";
import { Flex } from "../../flex";
import { Text } from "../../text";
import { makeStyles } from "../../theme";

type HeaderMenuUserProps = {
  name: string;
  avatarUrl: string;
  onPress?: () => void;
};

export default function HeaderMenuUser({
  name,
  avatarUrl,
  onPress,
}: HeaderMenuUserProps) {
  const styles = useStyles();

  return (
    <TouchableOpacity onPress={onPress}>
      <Flex
        direction="row"
        align="center"
        justify="flex-end"
        gap="md"
        style={styles.container}
      >
        <Text textAlign="right">{name}</Text>

        <Avatar avatarUrl={avatarUrl} size={28} />
      </Flex>
    </TouchableOpacity>
  );
}

const useStyles = makeStyles((theme) => ({
  container: {
    maxWidth: Dimensions.get("window").width - theme.spacing("md") * 6,
  },
}));
