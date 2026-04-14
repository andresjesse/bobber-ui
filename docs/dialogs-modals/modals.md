## Modals (`useModal` hook)

The `useModal` hook provides an imperative API to control global modals, allowing you to open and close custom components as modals without managing local visibility states.

**Note**: to use this hook, you must declare the `<Modal />` component in your `RootLayout` (`app/_layout.tsx`).

---

### Basic Usage

`const modal = useModal()` provides access to the following functions:

- `modal.hideModal()`: hides any modal currently visible.
- `modal.showModal(content: ReactNode, options?: Options)`: shows a new modal content using options:
  - **`transparentBackdrop`** (`boolean`): **(Optional)** defaults to `false`.
  - **`closeable`**: (`boolean`): **(Optional)** defaults to `true`.
  - **`onDismiss`**: (`() => void`): **(Optional)** callback triggered when user hides/closes the modal.

Always use a Modal Container to wrap your content:

```tsx
modal.showModal(<Modal.Windowed>...</Modal.Windowed>);

modal.showModal(<Modal.FullScreen>...</Modal.FullScreen>);
```

Full Example:

```tsx
import { Button, useModal, Text } from "@andresjesse/bobber-ui";

export const ModalDemo = () => {
  const modal = useModal();

  return (
    <Button
      title="Windowed Modal (Small)"
      onPress={() => {
        modal.showModal(
          <Modal.Windowed>
            <Modal.Header title="Windowed Modal (Small Content)" />

            <Text>Modal Content Here (can be anything)</Text>

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
  );
};
```

### Modal Header and Footer

**Modal.Header**

The `Modal.Header` component provides a standardized top section for modals, including a title and an optional close button.

Props:

- **`title`** (`string`): The text displayed as the heading of the modal.
- **`withCloseButton`** (`boolean`): **(Optional)** If true, displays a button to close the modal; defaults to `true`.

---

**Modal.Footer**

The `Modal.Footer` component is a layout container placed at the bottom of the modal, typically used to group action buttons.

Props:

- **`actions`** (`ButtonProps[]`): An array of bobber-ui `Button` to be rendered inside the footer (check bobber-ui [Button](../common-ui/button.md) props).

> **Note:** This component also accepts all props from the **Flex** component (such as `direction`, `align`, `justify`, etc.) to control its internal layout.

### Modal Containers

**Modal.Windowed**

The `Modal.Windowed` component is a layout wrapper that renders content in a centered container with a defined width, typically used to prevent content from over-expanding.

Props:

- **`children`** (`ReactNode`): The content to be rendered in full-screen mode.
- **`keyboardAware`** (`boolean`): **(Optional)** To wrap content with `KeyboardAwareScrollView`; defaults to `true`.

---

**Modal.Fullscreen**

The `Modal.Fullscreen` component is a specialized container that forces the modal content to occupy the entire screen dimensions, ignoring standard margins.

Props:

- **`children`** (`ReactNode`): The content to be rendered in full-screen mode.
