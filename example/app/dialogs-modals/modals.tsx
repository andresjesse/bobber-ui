import {
  Button,
  Flex,
  Header,
  Modal,
  ScreenWrapper,
  Text,
  TextInput,
  useModal,
} from "@andresjesse/bobber-ui";
import t from "../../services/lang";

export default function Screen() {
  const modal = useModal();

  return (
    <ScreenWrapper.Scrollable>
      <Header.Default title="Modals" />

      <Button
        title="FullScreen Modal (Big)"
        onPress={() => {
          modal.showModal(
            <Modal.FullScreen>
              <Modal.Header title="Fullscreen Modal Header" />

              <Flex gap={0}>
                {Array.from({ length: 100 }).map((_, index) => (
                  <Text key={index}>Modal Content {index}</Text>
                ))}
              </Flex>

              <TextInput label="Email" />

              <Text fontWeight="bold">END!</Text>

              <Modal.Footer
                actions={[
                  {
                    title: t("OK"),
                    onPress: () => {
                      console.log("Modal Closed Automatically!");
                    },
                  },
                ]}
              />
            </Modal.FullScreen>
          );
        }}
      />

      <Button
        title="FullScreen Modal (Small)"
        onPress={() => {
          modal.showModal(
            <Modal.FullScreen>
              <Modal.Header title="Fullscreen Modal Small" />

              <Flex gap={0}>
                {Array.from({ length: 10 }).map((_, index) => (
                  <Text key={index}>Modal Content {index}</Text>
                ))}
              </Flex>

              <Modal.Footer
                actions={[
                  {
                    title: t("OK"),
                    onPress: () => {
                      console.log("Modal Closed Automatically!");
                    },
                  },
                ]}
              />
            </Modal.FullScreen>
          );
        }}
      />

      <Button
        title="Windowed Modal (Big)"
        onPress={() => {
          modal.showModal(
            <Modal.Windowed>
              <Modal.Header title="Windowed Modal Big" />

              <Flex gap={0}>
                {Array.from({ length: 100 }).map((_, index) => (
                  <Text key={index}>Modal Content {index}</Text>
                ))}
              </Flex>

              <Modal.Footer
                actions={[
                  {
                    title: t("Cancel"),
                    variant: "subtle",
                    color: "gray",
                    onPress: () => {
                      console.log("Modal Closed Automatically!");
                    },
                  },
                  {
                    title: t("Confirm"),
                    onPress: () => {
                      console.log("Modal Closed Automatically!");
                    },
                  },
                ]}
              />
            </Modal.Windowed>
          );
        }}
      />

      <Button
        title="Windowed Modal (Small)"
        onPress={() => {
          modal.showModal(
            <Modal.Windowed>
              <Modal.Header title="Windowed Modal (Small Content)" />

              <Flex gap={0}>
                {Array.from({ length: 10 }).map((_, index) => (
                  <Text key={index}>Modal Content {index}</Text>
                ))}
              </Flex>

              <Modal.Footer
                actions={[
                  {
                    title: t("Cancel"),
                    variant: "subtle",
                    color: "gray",
                    onPress: () => {
                      console.log("Modal Closed Automatically!");
                    },
                  },
                  {
                    title: t("Confirm"),
                    onPress: () => {
                      console.log("Modal Closed Automatically!");
                    },
                  },
                ]}
              />
            </Modal.Windowed>
          );
        }}
      />

      <Button
        title="Modal with onDismiss"
        onPress={() => {
          modal.showModal(
            <Modal.Windowed>
              <Modal.Header title="Modal with onDismiss" />

              <Text>Check console after closing!</Text>

              <Modal.Footer
                actions={[
                  {
                    title: t("OK"),
                    onPress: () => {
                      console.log("Modal Closed Automatically!");
                    },
                  },
                ]}
              />
            </Modal.Windowed>,
            {
              onDismiss: () => {
                console.log("Modal Closed, this is onDismiss!");
              },
            }
          );
        }}
      />

      <Button
        title="Non Closable Modal"
        onPress={() => {
          modal.showModal(
            <Modal.Windowed>
              <Modal.Header title="Non Closable Modal" />

              <Text>You need to accept!</Text>

              <Modal.Footer
                actions={[
                  {
                    title: t("Cancel"),
                    variant: "subtle",
                    color: "gray",
                    disabled: true,
                  },
                  {
                    title: t("Accept"),
                    onPress: () => {
                      modal.hideModal();
                      console.log("Modal closed Manually!");
                    },
                  },
                ]}
              />
            </Modal.Windowed>,
            {
              closeable: false,
            }
          );
        }}
      />
    </ScreenWrapper.Scrollable>
  );
}
