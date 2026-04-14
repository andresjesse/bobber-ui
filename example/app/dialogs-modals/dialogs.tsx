import {
  Button,
  Dialog,
  Flex,
  Header,
  ScreenWrapper,
  Text,
} from "@andresjesse/bobber-ui";

export default function Screen() {
  return (
    <ScreenWrapper.Scrollable>
      <Header.Default title="Dialogs" />

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
    </ScreenWrapper.Scrollable>
  );
}
