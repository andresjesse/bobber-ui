## Text

The `Text` component is a themed alternative to the standard React Native Text, providing integrated support for hierarchy (h1-h4) and theme-driven typography.

---

### Component Props

- **`children`** (`React.ReactNode`): The content to be rendered inside the text component.
- **`color`** (`ColorValue`): **(Optional)** Sets the color of the text; defaults to the theme's foreground color.
- **`fontSize`** (`number`): **(Optional)** Specifies the size of the font; defaults to the theme's default font size.
- **`fontWeight`** (`TextStyle["fontWeight"]`): **(Optional)** Defines the thickness of the characters; defaults to `"normal"`.
- **`fontStyle`** (`TextStyle["fontStyle"]`): **(Optional)** Specifies whether the font is `"normal"` or `"italic"`; defaults to `"normal"`.
- **`textAlign`** (`TextStyle["textAlign"]`): **(Optional)** Sets the horizontal alignment of the text; defaults to `"left"`.
- **`style`** (`StyleProp<TextStyle>`): **(Optional)** Custom styles to be merged with the component's default and heading styles.
- **`h1`** (`boolean`): **(Optional)** If true, applies Level 1 heading styles.
- **`h2`** (`boolean`): **(Optional)** If true, applies Level 2 heading styles.
- **`h3`** (`boolean`): **(Optional)** If true, applies Level 3 heading styles.
- **`h4`** (`boolean`): **(Optional)** If true, applies Level 4 heading styles.
- **`firstChild`** (`boolean`): **(Optional)** Adjusts heading margins when the component is the first child in a container.

---

### Usage Example

```tsx
import React from "react";
import { Text, Flex } from "@andresjesse/bobber-ui";

export const TypographyExample = () => {
  return (
    <Flex gap="md" padding="lg">
      <Text h1 firstChild>
        Main Title
      </Text>

      <Text h2 color="#333">
        Section Header
      </Text>

      <Text
        fontSize={16}
        fontWeight="bold"
        textAlign="center"
        fontStyle="italic"
      >
        Custom Styled Paragraph
      </Text>

      <Text style={{ letterSpacing: 1.5 }}>
        Regular themed text with custom style override.
      </Text>

      <Text h4 color="gray">
        Small Heading
      </Text>
    </Flex>
  );
};
```
