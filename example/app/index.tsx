import {
  Badge,
  Button,
  Card,
  Checkbox,
  Dialog,
  Flex,
  Form,
  Header,
  Modal,
  ScreenWrapper,
  Select,
  Text,
  TextInput,
  ToggleableContent,
  useForm,
  useModal,
} from "@andresjesse/bobber-ui";

import { z } from "zod";
import CommonUICard from "../components/cards/common-ui-card";
import ScreenWrappersCard from "../components/cards/screen-wrappers-card";
import MainMenu from "../menus/main-menu";
import t from "../services/lang";

export default function Screen() {
  const modal = useModal();

  const form = useForm({
    initialValues: {
      email: "disabled@email.com",
      password: "",
      remember: false,
      domain: null,
    },
    validations: {
      email: z.email(t("Email inválido!")),
      password: z.string().min(6, t("Senha muito curta!")),
      remember: z
        .boolean()
        .refine((value) => value, t("Voce precisa marcar isto!")),
    },
    onSubmit: (values) => {
      console.log("Screen:", values);
    },
  });

  return (
    <ScreenWrapper.Scrollable>
      <Header.Default title="Home" menu={<MainMenu />} />

      <ScreenWrappersCard />

      <CommonUICard />

      <Card>
        <Card.Header title="Dialogs & Modals Card" />

        <Text>Dialogs</Text>

        <Button
          title="Dialog.alert()"
          onPress={() => Dialog.alert("Alert Title", "Alert Message")}
        />

        <Button
          title="Dialog.alert() with Options"
          onPress={() =>
            Dialog.alert("Danger!", "Alert danger Message", {
              actionColor: "red",
              onDismiss: () => {
                console.log("Dialog onDismiss!");
              },
            })
          }
        />

        <Button
          title="Dialog.prompt()"
          onPress={() =>
            Dialog.prompt("Prompt Title", "Prompt Message:", (value) => {
              console.log("Inserted value: ", value);
            })
          }
        />

        <ToggleableContent>
          <Button
            title="Dialog.prompt() with Options"
            onPress={() =>
              Dialog.prompt(
                "Prompt Title",
                "This prompt is not cancelable and triggers onDismiss",
                (value) => {
                  console.log("Inserted value: ", value);
                },
                {
                  cancelable: false,
                  onDismiss: () => {
                    console.log("Dialog onDismiss!");
                  },
                }
              )
            }
          />

          <Button
            title="Dialog.select() string[]"
            onPress={() =>
              Dialog.select(
                "Select an Option (or Dismiss)",
                ["TypeScript", "JavaScript", "PHP"],
                (value) => {
                  console.log("Selected:", value);
                },
                {
                  onDismiss: () => {
                    console.log("Optional Select onDismiss!");
                  },
                }
              )
            }
          />

          <Button
            title="Dialog.select() Car[] non cancelable"
            onPress={() =>
              Dialog.select(
                "Select an Option (Cannot Dismiss)",
                {
                  values: Array.from({ length: 50 }).map((_, index) => ({
                    model: `Car ${index}`,
                    brand: `Brand ${index}`,
                    hp: 100 + Math.random() * 100,
                  })),
                  renderItem: (item, index) => (
                    // eslint-disable-next-line react-native/no-inline-styles
                    <Flex key={index} gap="xs" style={{ marginTop: 16 }}>
                      <Text>{item.model}</Text>
                      <Text>{item.brand}</Text>
                      <Text>{item.hp}</Text>
                    </Flex>
                  ),
                },
                (value) => {
                  console.log("Selected Car:", JSON.stringify(value, null, 2));
                },
                {
                  cancelable: false,
                  onDismiss: () => {
                    console.log("Optional Select onDismiss!");
                  },
                }
              )
            }
          />

          <Text>Modals</Text>

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

                  <TextInput label="Email" {...form.getInputProps("email")} />

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
        </ToggleableContent>
      </Card>

      <Card>
        <Card.Header title="Form Card" />

        <Form>
          <TextInput
            label="Email"
            {...form.getInputProps("email")}
            // disabled
          />

          <TextInput
            label="Password"
            secureTextEntry
            {...form.getInputProps("password")}
          />

          <Checkbox
            label="Remember me"
            {...form.getBooleanInputProps("remember")}
            // disabled
          />

          <Select
            data={["abc.com", "xyz.com", "asd.org"]}
            label="Domain"
            {...form.getSelectProps("domain")}
            defaultSelectedIndex={1}
            allowDeselect
            // disabled
          />

          <Button
            title="Submit"
            disabled={form.hasErrors}
            onPress={form.submit}
          />
        </Form>
      </Card>

      <Card>
        <Card.Header
          title="Headings Card"
          rightSection={<Badge color="red">Hot!</Badge>}
        />

        <Card.Divider />

        <Text h1 firstChild>
          Heading H1
        </Text>
        <Text textAlign="justify">
          [textAlign="justify"] Lorem Ipsum is simply dummy text of the printing
          and typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s, when an unknown printer took a galley
          of type and scrambled it to make a type specimen book.
        </Text>

        <ToggleableContent>
          <Text h2 firstChild>
            Heading H2
          </Text>
          <Text fontStyle="italic">
            [fontStyle="italic"] Lorem Ipsum is simply dummy text of the
            printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type
            specimen book.
          </Text>

          <Text h3>Heading H3</Text>
          <Text fontWeight="bold">
            [fontWeight="bold"] Lorem Ipsum is simply dummy text of the printing
            and typesetting industry. Lorem Ipsum has been the industry's
            standard dummy text ever since the 1500s, when an unknown printer
            took a galley of type and scrambled it to make a type specimen book.
          </Text>

          <Text h4>Heading H4</Text>
          {/* eslint-disable-next-line react-native/no-inline-styles */}
          <Text style={{ textTransform: "capitalize" }}>
            [customStyle with textTransform:"capitalize"] Lorem Ipsum is simply
            dummy text of the printing and typesetting industry. Lorem Ipsum has
            been the industry's standard dummy text ever since the 1500s, when
            an unknown printer took a galley of type and scrambled it to make a
            type specimen book.
          </Text>
        </ToggleableContent>
      </Card>
    </ScreenWrapper.Scrollable>
  );
}
