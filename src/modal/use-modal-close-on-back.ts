import { useCallback, useEffect } from "react";
import { BackHandler, type NativeEventSubscription } from "react-native";

import { useModal } from "./use-modal";

/**
 * This hook intercepts the Back Button press and closes the modal when it's open instead of triggering the default navigate back behavior.
 */
export default function useModalCloseOnBack() {
  const modal = useModal();
  const isModalVisible = modal.content !== undefined;

  const handleBackPress = useCallback(() => {
    if (modal.options.closeable) {
      modal.hideModal();
    }

    return true;
  }, [modal]);

  // Use usePreventRemove for React Navigation Header Back Button
  // TODO: This causes a react navigation error. Check if it is really needed. It seems to work fine without because header back button is always behind the modal backdrop. If needed, an alternative can be done only using expo-router hooks: https://stackoverflow.com/a/75897807
  // usePreventRemove(isModalVisible, handleBackPress);

  // Deal BackHandler for Android Physical Back Button and Swipe Back gesture
  useEffect(() => {
    let backHandler: NativeEventSubscription;

    if (isModalVisible) {
      backHandler = BackHandler.addEventListener(
        "hardwareBackPress",
        handleBackPress
      );
    }

    return () => {
      backHandler?.remove();
    };
  }, [isModalVisible, handleBackPress]);
}
