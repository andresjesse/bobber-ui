import { useState } from "react";

import { TextInput } from "../form";
import { DEFAULT_STRINGS } from "../lang/default-strings";
import { Modal, useModal } from "../modal";
import { Text } from "../text";

type PromptOptions = {
  actionLabel?: string;
  cancelLabel?: string;
  cancelable?: boolean;
  onDismiss?: () => void;
};

export const prompt = (
  title: string,
  message: string,
  onSubmit: (value: string) => void,
  options?: PromptOptions
) => {
  const ModalContent = () => {
    const [input, setInput] = useState("");

    const onPress = () => {
      useModal.getState().hideModal();
      onSubmit?.(input);
    };

    return (
      <Modal.Windowed keyboardAware={false}>
        <Modal.Header title={title} />

        <Text>{message}</Text>

        <TextInput value={input} onChangeText={setInput} multiline />

        <Modal.Footer
          actions={[
            {
              title: options?.cancelLabel ?? DEFAULT_STRINGS.cancel,
              variant: "subtle",
              color: "gray",
              disabled: options?.cancelable === false,
              onPress: useModal.getState().hideModal,
            },
            {
              title: options?.actionLabel ?? DEFAULT_STRINGS.ok,
              onPress,
            },
          ]}
        />
      </Modal.Windowed>
    );
  };

  useModal.getState().showModal(<ModalContent />, {
    onDismiss: options?.onDismiss,
    closeable: options?.cancelable ?? true,
  });
};
