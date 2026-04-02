import { TouchableOpacity } from "react-native";

import { Flex } from "../../flex";
import { Icon } from "../../icon";
import { Text } from "../../text";
import { makeStyles } from "../../theme";
import { useModal } from "../use-modal";

export type OverlayHeaderProps = {
  title: string;
  withCloseButton?: boolean;
};

export default function OverlayHeader({
  title,
  withCloseButton = true,
}: OverlayHeaderProps) {
  const modal = useModal();
  const styles = useStyles({ closeable: modal.options.closeable });

  return (
    <Flex direction="row" gap="xs" align="center" justify="space-between">
      <Text fontWeight="bold" fontSize={16}>
        {title}
      </Text>

      {withCloseButton && (
        <TouchableOpacity
          onPress={modal.hideModal}
          disabled={!modal.options.closeable}
        >
          <Icon
            type="material"
            name="close"
            color={styles.icon.color}
            size={24}
          />
        </TouchableOpacity>
      )}
    </Flex>
  );
}

const useStyles = makeStyles((theme, props: { closeable: boolean }) => ({
  icon: {
    color: props.closeable
      ? theme.colors.foreground("auto")
      : theme.colors.select("#ccc", "#555"),
  },
}));
