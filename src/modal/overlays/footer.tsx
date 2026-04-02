import { type GestureResponderEvent } from "react-native";

import { Button, type ButtonProps } from "../../button";
import { Flex, type FlexProps } from "../../flex";
import { makeStyles } from "../../theme";
import { useModal } from "../use-modal";

type OverlayFooterProps = {
  actions: ButtonProps[];
} & Omit<FlexProps, "children">;

export default function OverlayFooter({
  actions,
  ...rest
}: OverlayFooterProps) {
  const styles = useStyles();
  const modal = useModal();

  const handlePress = (actionIndex: number, event: GestureResponderEvent) => {
    if (modal.options.closeable) {
      modal.hideModal();
    }
    actions[actionIndex]!.onPress?.(event);
  };

  return (
    <Flex gap="md" direction="row" align="center" justify="flex-end" {...rest}>
      {actions.map((action, index) => (
        <Button
          key={index}
          containerStyle={styles.action}
          {...action}
          // onPress must override ...action.onPress to intercept it
          onPress={(event) => handlePress(index, event)}
        />
      ))}
    </Flex>
  );
}

const useStyles = makeStyles(() => ({
  action: {
    minWidth: 80,
  },
}));
