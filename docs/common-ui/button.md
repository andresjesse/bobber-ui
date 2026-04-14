## Button

The `Button` component is a versatile interactive element used to trigger actions, featuring multiple visual variants, size configurations, and support for icon sections.

---

### Component Props

- **`title`** (`string`): The text label displayed inside the button.
- **`variant`** (`"filled" | "light" | "outline" | "subtle"`): **(Optional)** Defines the visual style of the button; defaults to `"filled"`.
- **`size`** (`"xs" | "sm" | "md" | "lg" | "xl"`): **(Optional)** Sets the button's padding and font size; defaults to `"md"`.
- **`color`** (`keyof Colors`): **(Optional)** Specifies the theme color used for the background or borders.
- **`fullWidth`** (`boolean`): **(Optional)** If true, the button expands to fill the available width of its container.
- **`containerStyle`** (`StyleProp<ViewStyle>`): **(Optional)** Custom styles applied to the button's touchable container.
- **`textStyle`** (`StyleProp<TextStyle>`): **(Optional)** Custom styles applied to the button's text label.
- **`leftSection`** (`ReactNode`): **(Optional)** An element (like an icon) rendered to the left of the title.
- **`rightSection`** (`ReactNode`): **(Optional)** An element (like an icon) rendered to the right of the title.
- **`justify`** (`"flex-start" | "flex-end" | "center" | "space-between"`): **(Optional)** Controls the horizontal alignment of the content.
- **`disabled`** (`boolean`): **(Optional)** If true, disables interaction and applies a visually muted style.

---

### Usage Example

```tsx
import React from "react";
import { Button } from "@andresjesse/bobber-ui";
import { IconSearch } from "some-icon-library";

export const ActionButton = () => {
  return (
    <Button
      title="Search Projects"
      variant="outline"
      size="lg"
      color="primary"
      fullWidth={true}
      justify="center"
      leftSection={<IconSearch size={20} />}
      disabled={false}
      onPress={() => console.log("Button pressed!")}
    />
  );
};
```
