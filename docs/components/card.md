## Card

The `Card` component is a layout container designed to group related content within a visually elevated surface, providing integrated support for headers and dividers.

---

### Component Props

- **`children`** (`ReactNode`): The content elements to be rendered inside the card.
- **`gap`** (`number | "xs" | "sm" | "md" | "lg" | "xl"`): **(Optional)** Defines the vertical or horizontal spacing between child elements; defaults to `"xs"`.

> **Note:** This component also accepts all props from the **Flex** component (such as `direction`, `align`, `justify`, etc.) to control its internal layout.

> **Note [2]:** This component also have sub-components Card.Header and Card.Divider (check example).

---

### Usage Example

```tsx
import React from "react";
import { Text } from "react-native";
import { Card } from "@andresjesse/bobber-ui";

export const ExampleCard = () => {
  return (
    <Card gap="md">
      <Card.Header title="Project Details" rightSection={<SomeIconHere />} />
      <Card.Divider />
      <Text>This content is automatically spaced based on the gap prop.</Text>
    </Card>
  );
};
```
