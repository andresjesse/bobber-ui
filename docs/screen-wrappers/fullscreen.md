## ScreenWrapper.Fullscreen

The `ScreenWrapper.Fullscreen` is a layout container designed for non-scrollable or keyboard-aware views that occupy the full viewport, offering built-in support for centered content, theme-based spacing, and safe area management.

---

### Component Props

- **`children`** (`PropsWithChildren`): The content to be rendered within the fullscreen container.
- **`center`** (`boolean`): **(Optional)** If true, centers the children both vertically and horizontally.
- **`padding`** (`"xs" | "sm" | "md" | "lg" | "xl" | "none"`): **(Optional)** Defines the internal spacing level based on the theme.
- **`gap`** (`number | "xs" | "sm" | "md" | "lg" | "xl"`): **(Optional)** Specifies the gap distance between child elements.
- **`keyboardAware`** (`boolean`): **(Optional)** When true, uses `KeyboardAwareScrollView` to prevent the keyboard from obscuring content; defaults to `true`.

---

### Usage Example

```tsx
import { ScreenWrapper, Text } from "@andresjesse/bobber-ui";

export const MyScreen = () => {
  return (
    <ScreenWrapper.Fullscreen
      center={true}
      padding="md"
      gap="sm"
      keyboardAware={true}
    >
      <Text>Centered Fullscreen Content</Text>
      <Text>With Theme Spacing</Text>
    </ScreenWrapper.Fullscreen>
  );
};
```
