## Dialog

The `Dialog` component provides an imperative API to display synchronized system-style modals including alerts, text prompts, and item selection lists.

---

### Static Methods

The `Dialog` component is accessed via three main static methods: `alert`, `prompt`, and `select`.

#### 1. Dialog.alert(title, message, options?)

- **`title`** (`string`): The title displayed at the top of the alert.
- **`message`** (`string`): The main content text of the alert.
- **`options`** (`AlertOptions`): **(Optional)** Configuration object.
  - **`actionColor`** (`keyof Colors`): **(Optional)** Theme color applied to the primary action button.
  - **`actionLabel`**: (`string`): **(Optional)** Main action button label.
  - **`onDismiss`** (`() => void`): **(Optional)** Callback function executed when the dialog is closed.

#### 2. Dialog.prompt(title, message, callback, options?)

- **`title`** (`string`): The title of the prompt window.
- **`message`** (`string`): Instructions or context for the user input.
- **`onSubmit`** (`(value: string) => void`): Function called with the user's input string upon confirmation.
- **`options`** (`PromptOptions`): **(Optional)** Configuration object.
  - **`cancelable`** (`boolean`): **(Optional)** If false, forces the user to interact with the prompt to close it.
  - **`onDismiss`** (`() => void`): **(Optional)** Callback function executed when the prompt is dismissed.
  - **`actionLabel`**: (`string`): **(Optional)** Main action button label.
  - **`cancelLabel`**: (`string`): **(Optional)** Cancel action button label.

#### 3. Dialog.select(title, data, callback, options?)

- **`title`** (`string`): The title displayed above the selection list.
- **`data`** (`string[] | SelectObject`): The list of items to display. Can be a simple string array or an object with custom rendering logic.
- **`onSelect`** (`(value: T) => void`): Function called with the selected item.
- **`options`** (`SelectOptions`): **(Optional)** Configuration object.
  - **`cancelable`** (`boolean`): **(Optional)** Whether the selection list can be dismissed without a choice.
  - **`onDismiss`** (`() => void`): **(Optional)** Callback function executed when the selector is dismissed.

---

### Usage Examples

```tsx
import React from "react";
import { Button, Dialog, Text, Flex } from "@andresjesse/bobber-ui";

export const DialogGallery = () => {
  return (
    <Flex gap="md">
      {/* Basic Alert */}
      <Button
        title="Show Alert"
        onPress={() => Dialog.alert("Success", "Operation completed!")}
      />

      {/* Alert with Custom Color and Dismiss Action */}
      <Button
        title="Danger Alert"
        onPress={() =>
          Dialog.alert("Warning", "Delete record?", {
            actionColor: "red",
            onDismiss: () => console.log("Alert dismissed"),
          })
        }
      />

      {/* Prompt with Callback */}
      <Button
        title="Open Prompt"
        onPress={() =>
          Dialog.prompt("Username", "Enter your name:", (val) =>
            console.log(val)
          )
        }
      />

      {/* Simple Selection List */}
      <Button
        title="Select Language"
        onPress={() =>
          Dialog.select("Pick one", ["TypeScript", "JavaScript"], (item) =>
            console.log("Selected:", item)
          )
        }
      />

      {/* Advanced Selection with Custom Rendering */}
      <Button
        title="Select Object"
        onPress={() =>
          Dialog.select(
            "Choose Vehicle",
            {
              values: [
                { id: 1, model: "Meteor 350" },
                { id: 2, model: "F-1000" },
              ],
              renderItem: (item) => (
                <Flex style={{ padding: 10 }}>
                  <Text>{item.model}</Text>
                </Flex>
              ),
            },
            (v) => console.log("Vehicle ID:", v.id),
            { cancelable: false }
          )
        }
      />
    </Flex>
  );
};
```
