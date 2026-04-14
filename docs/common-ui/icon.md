## Icon

The `Icon` component is a unified wrapper for `@expo/vector-icons`, providing an easy way to switch between **Material** Icons and **Material Community** Icons while automatically integrating with the project's theme colors.

---

### Component Props

- **`type`** (`"material" | "material-community"`): Specifies the icon set to be used.
- **`name`** (`keyof MaterialIcons.glyphMap | keyof MaterialCommunityIcons.glyphMap`): The name of the icon from the selected icon set.
- **`size`** (`number`): **(Optional)** The height and width of the icon in logical pixels; defaults to `24`.
- **`color`** (`string`): **(Optional)** The color of the icon; defaults to the theme's foreground color.
- **`style`** (`StyleProp`): **(Optional)** Custom styles applied directly to the icon component.

---

### Usage Example

```tsx
import { Icon } from "@andresjesse/bobber-ui";

export const IconGallery = () => {
  return (
    <>
      {/* Material Icon Example */}

      <Icon type="material" name="directions-bike" size={32} color="#2E7D32" />

      {/* Material Community Icon Example */}

      <Icon
        type="material-community"
        name="truck-check"
        size={32}
        style={{ marginTop: 4 }}
      />
    </>
  );
};
```
