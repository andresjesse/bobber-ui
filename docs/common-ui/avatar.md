## Avatar

The `Avatar` component is a simple image wrapper designed to display user profile pictures with a circular mask and customizable dimensions.

---

### Component Props

- **`avatarUrl`** (`string`): The remote URL of the image to be displayed in the avatar.
- **`size`** (`number`): **(Optional)** The diameter of the avatar; defaults to 64.
- **`style`** (`ImageStyle`): **(Optional)** Custom styles to be applied directly to the underlying React Native Image component.

---

### Usage Example

```tsx
import React from "react";
import { Avatar } from "@andresjesse/bobber-ui";

export const UserProfile = () => {
  return (
    <Avatar
      avatarUrl="[https://github.com/andresjesse.png](https://github.com/andresjesse.png)"
      size={80}
      style={{ borderWidth: 2, borderColor: "#000" }}
    />
  );
};
```
