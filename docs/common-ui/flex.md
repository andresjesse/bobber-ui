## Flex

The `Flex` component is a fundamental layout building block that provides a simplified interface for applying Flexbox properties and theme-based spacing in React Native.

---

### Component Props

- **`children`** (`ReactNode`): The content to be rendered inside the flex container.
- **`gap`** (`number | "xs" | "sm" | "md" | "lg" | "xl"`): **(Optional)** Sets the spacing between child elements using theme scales or a fixed number.
- **`direction`** (`"row" | "column" | "row-reverse" | "column-reverse"`): **(Optional)** Sets the primary axis of the container; defaults to `"column"`.
- **`align`** (`"flex-start" | "flex-end" | "center" | "stretch"`): **(Optional)** Aligns children along the cross axis of the container.
- **`justify`** (`"flex-start" | "flex-end" | "center" | "space-between" | "space-around" | "space-evenly"`): **(Optional)** Aligns children along the main axis.
- **`wrap`** (`"wrap" | "nowrap" | "wrap-reverse"`): **(Optional)** Controls whether children are forced onto a single line or can wrap onto multiple lines.
- **`grow`** (`number`): **(Optional)** Controls Flexbox grow parameter.
- **`shrink`** (`number`): **(Optional)** Controls Flexbox shrink parameter.

> **Note:** This component also accepts all props from the **View** component (such as `style`).

---

### Usage Example

```tsx
import { View } from "react-native";
import { Flex, Text } from "@andresjesse/bobber-ui";

export const LayoutExample = () => {
  return (
    <Flex
      direction="row"
      align="center"
      justify="space-between"
      gap="md"
      wrap="wrap"
      style={{ backgroundColor: "#f0f0f0" }}
    >
      <View style={{ width: 50, height: 50, backgroundColor: "red" }} />
      <View style={{ width: 50, height: 50, backgroundColor: "blue" }} />
      <Text>Flex Layout Content</Text>
    </Flex>
  );
};
```
