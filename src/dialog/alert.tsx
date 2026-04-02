import { DEFAULT_STRINGS } from "../lang/default-strings";
import { Modal, useModal } from "../modal";
import { Text } from "../text";
import { type Colors } from "../theme/theme.types";

type Options = {
  actionLabel?: string;
  actionColor?: keyof Colors;
  onDismiss?: () => void;
};

export const alert = (title: string, message: string, options?: Options) => {
  useModal.getState().showModal(
    <Modal.Windowed>
      <Modal.Header title={title} />

      <Text>{message}</Text>

      <Modal.Footer
        actions={[
          {
            title: options?.actionLabel ?? DEFAULT_STRINGS.ok,
            color: options?.actionColor,
            onPress: useModal.getState().hideModal,
          },
        ]}
      />
    </Modal.Windowed>,
    {
      onDismiss: options?.onDismiss,
    }
  );
};
