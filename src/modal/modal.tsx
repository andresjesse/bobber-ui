import Backdrop from "./backdrop";
import { useModal } from "./use-modal";
import useModalCloseOnBack from "./use-modal-close-on-back";

import OverlayFooter from "./overlays/footer";
import OverlayHeader from "./overlays/header";

import FullscreenOverlay from "./overlays/fullscreen";
import WindowedOverlay from "./overlays/windowed";

export function Modal() {
  const { content, options, hideModal } = useModal();

  useModalCloseOnBack();

  if (!content) return null;

  const handleBackdropPress = () => {
    if (options.closeable) {
      hideModal();
    }
  };

  return (
    <Backdrop
      onPress={handleBackdropPress}
      transparent={options.transparentBackdrop}
    >
      {content}
    </Backdrop>
  );
}

Modal.Header = OverlayHeader;
Modal.Footer = OverlayFooter;

Modal.FullScreen = FullscreenOverlay;
Modal.Windowed = WindowedOverlay;
