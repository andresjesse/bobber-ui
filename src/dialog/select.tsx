import { type ReactNode } from "react";
import { TouchableOpacity } from "react-native";

import { isArrayOfStrings } from "../helpers/is-array-of-strings";
import { Modal, useModal } from "../modal";
import { Text } from "../text";

type Options = {
  onDismiss?: () => void;
  cancelable?: boolean;
};

export const select = <T,>(
  title: string,
  data:
    | string[]
    | { values: T[]; renderItem: (item: T, key: React.Key) => ReactNode },
  onSelect: (item: T | string) => void,
  options?: Options
) => {
  const onPressItem = (item: T | string) => {
    useModal.getState().hideModal();
    onSelect(item);
  };

  const ModalContent = () => {
    return (
      <Modal.FullScreen>
        <Modal.Header title={title} />

        {isArrayOfStrings(data)
          ? data.map((item, index) => (
              <TouchableOpacity key={index} onPress={() => onPressItem(item)}>
                <Text key={index}>{item}</Text>
              </TouchableOpacity>
            ))
          : data.values.map((item, index) => (
              <TouchableOpacity key={index} onPress={() => onPressItem(item)}>
                {data.renderItem(item, index)}
              </TouchableOpacity>
            ))}
      </Modal.FullScreen>
    );
  };

  useModal.getState().showModal(<ModalContent />, {
    onDismiss: options?.onDismiss,
    closeable: options?.cancelable ?? true,
  });
};
