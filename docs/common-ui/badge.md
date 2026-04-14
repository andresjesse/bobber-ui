## Badge

The `Badge` component is a compact UI element used to display status labels, counts, or categories with theme-integrated colors and varying sizes.

---

### Component Props

- **`children`** (`React.ReactNode`): The content to be displayed inside the badge (usually a string or an icon).
- **`color`** (`keyof Colors`): **(Optional)** Defines the color palette of the badge based on the application theme.
- **`size`** (`"xs" | "sm" | "md" | "lg" | "xl"`): **(Optional)** Controls the internal padding and font size of the badge.
- **`containerStyle`** (`ViewStyle`): **(Optional)** Custom styles applied to the outer View container.
- **`textStyle`** (`TextStyle`): **(Optional)** Custom styles applied specifically to the text element within the badge.

---

### Usage Example

```tsx
import { Badge } from "@andresjesse/bobber-ui";

export const StatusBadge = () => {
  return (
    <Badge
      color="primary"
      size="md"
      containerStyle={{ marginTop: 10 }}
      textStyle={{ fontStyle: "italic" }}
    >
      Active
    </Badge>
  );
};
```
