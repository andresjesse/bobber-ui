## ToggleableContent

`ToggleableContent` is a layout component that allows users to show or hide content by tapping a header link. It is ideal for progressive disclosure of information like "See More" descriptions or advanced settings.

---

### Component Props

- **`children`** (`ReactNode`): The content to be revealed when the component is open.
- **`header`** (`{ open: string; closed: string }`): **(Optional)** Custom text for the toggle link in both states. Defaults to "See less" (open) and "See more" (closed).
- **`style`** (`StyleProp<ViewStyle>`): **(Optional)** Styles for the main container.
- **`headerStyle`** (`StyleProp<TextStyle>`): **(Optional)** Custom styles for the toggle text link.
- **`gap`** (`number | "xs" | "sm" | "md" | "lg" | "xl"`): **(Optional)** The vertical spacing between elements; defaults to `"xs"`.
- **`openByDefault`** (`boolean`): **(Optional)** If true, the content is visible on mount; defaults to `false`.

---

### Usage Example

```tsx
import React from "react";
import { ToggleableContent, Text, Flex } from "@andresjesse/bobber-ui";

export const ProductDetails = () => {
  return (
    <Flex padding="lg">
      <Text h2 firstChild>
        Meteor 350 Specifications
      </Text>

      <Text>A classic cruiser designed for the open road.</Text>

      <ToggleableContent
        header={{ open: "Hide Details", closed: "Show Technical Specs" }}
        gap="md"
        style={{ marginTop: 10 }}
      >
        <Flex gap="xs">
          <Text fontWeight="bold">Engine:</Text>
          <Text>349cc, Single cylinder, 4 stroke, Air-Oil cooled</Text>

          <Text fontWeight="bold">Max Power:</Text>
          <Text>20.2 BHP @ 6100 rpm</Text>

          <Text fontWeight="bold">Fuel Capacity:</Text>
          <Text>15 Liters</Text>
        </Flex>
      </ToggleableContent>
    </Flex>
  );
};
```
