## ScreenWrapper.Scrollable

The `ScreenWrapper.Scrollable` is a flexible layout container designed for content-heavy views, providing an integrated scrollable area with built-in keyboard awareness and pull-to-refresh functionality.

---

### Component Props

- **`children`** (`PropsWithChildren`): The content elements to be rendered within the scrollable area.
- **`padding`** (`"xs" | "sm" | "md" | "lg" | "xl" | "none"`): **(Optional)** Defines the internal spacing level applied to the content container based on the theme.
- **`gap`** (`number | "xs" | "sm" | "md" | "lg" | "xl"`): **(Optional)** Specifies the vertical spacing between child elements.
- **`onRefresh`** (`() => Promise<void>`): **(Optional)** A function that triggers the pull-to-refresh indicator and reloads content.

---

### Usage Example

```tsx
import { ScreenWrapper, Text } from "@andresjesse/bobber-ui";

export const MyScrollableScreen = () => {
  const handleRefresh = async () => {
    // Logic to reload data
    await new Promise((resolve) => setTimeout(resolve, 2000));
  };

  return (
    <ScreenWrapper.Scrollable padding="md" gap="lg" onRefresh={handleRefresh}>
      <Text>Scrollable Content Item 1</Text>
      <Text>Scrollable Content Item 2</Text>
      <Text>Scrollable Content Item 3</Text>
    </ScreenWrapper.Scrollable>
  );
};
```
