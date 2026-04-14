## Form

The `Form` component is a high-level wrapper that integrates `useForm` hook and `zod` to provide a type-safe, structured environment for managing input validation and submission logic.

---

### Component Props

- **`children`** (`ReactNode`): The content to be rendered inside the flex container.

> **Note:** This component also accepts all props from the **Flex** component (such as `direction`, `align`, `justify`, etc.) to control its internal layout.

---

### The `useForm` hook

The `useForm` hook is a lightweight state management utility designed to handle form values, Zod-based validations, and submission logic without requiring a heavy external library. `const form = useForm(...)` returns a form instance used to populate and catch events from form inputs.

Hook props:

- **`initialValues`** (`Record<string, any>`): An object representing the starting state of all form fields.
- **`validations`** (`Record<string, z.ZodType>`): **(Optional)** An object mapping field names to Zod schemas for real-time validation.
- **`onSubmit`** (`(values: Record<string, any>) => void`): The callback function triggered when the `submit()` method is called.

Hook Return Values:

- **`getInputProps(name)`** (`Function`): Returns `value`, `onChangeText`, and `errors` for standard text inputs.
- **`getBooleanInputProps(name)`** (`Function`): Returns `checked`, `onChange`, and `errors` for toggle or checkbox inputs.
- **`getSelectProps(name)`** (`Function`): Returns `selected`, `onChange`, and `errors` for selection-based components.
- **`hasErrors`** (`boolean`): Returns `true` if any field fails validation or if the form has not been fully validated yet.
- **`submit`** (`() => void`): Executes the `onSubmit` callback provided in the hook arguments.
- **`reset`** (`() => void`): Reverts all field values to the `initialValues` and clears any existing errors.

### TextInput

`TextInput` is a controlled input component designed to integrate seamlessly with the `useForm` hook, automatically handling value updates and displaying validation errors.

Props:

- **`label`** (`string`): **(Optional)** The descriptive text displayed above the input field.
- **`errors`** (`string[]`): **(Optional)** An array of validation error messages to be displayed below the component.
- **`disabled`** (`boolean`): **(Optional)** If true, prevents user interaction with the input.

> **Note:** This component also accepts all props from the **React Native TextInput** component (such as `secureTextEntry`).

### Checkbox

`Checkbox` is a controlled boolean input component designed for use within the `useForm` hook system, specifically handling toggle states and validation error messages.

Props:

- **`checked`** (`boolean`): The current state of the checkbox.
- **`onChange`** (`(value: boolean) => void`): Callback function triggered when the toggle state changes.
- **`label`** (`string`): **(Optional)** The label text displayed alongside the checkbox.
- **`errors`** (`string[]`): **(Optional)** An array of validation error messages to be displayed below the component.
- **`disabled`** (`boolean`): **(Optional)** If true, prevents user interaction with the checkbox.

### Select

The `Select` component is a form input that triggers a selection dialog. It supports both simple string arrays and complex objects with custom item rendering.

Props:

- **`data`** (`string[] | { values: T[]; renderItem: (item: T, key: React.Key) => ReactNode }`): The data source for the selection list.
- **`selected`** (`T | string`): The currently active/selected value.
- **`onChange`** (`(selected: T | string | null) => void`): Callback function triggered when a new item is selected or cleared.
- **`label`** (`string`): **(Optional)** Descriptive text displayed above the select field.
- **`errors`** (`string[]`): **(Optional)** An array of validation error messages to display.
- **`disabled`** (`boolean`): **(Optional)** If true, disables user interaction; defaults to `false`.
- **`defaultSelectedIndex`** (`number`): **(Optional)** The index of the item to be selected by default on mount.
- **`allowDeselect`** (`boolean`): **(Optional)** If true, shows a clear button to set the value to null; defaults to `false`.
- **`style`** (`TouchableOpacityProps["style"]`): **(Optional)** Custom styles for the input container.

### Usage Example

```tsx
import {
  ...
} from "@andresjesse/bobber-ui";
import z from "zod";

export default function Screen() {
  const form = useForm({
    initialValues: {
      email: "disabled@email.com",
      ... other initial values
    },
    validations: {
      email: z.email(t("Invalid Email!")),
      ... other zod validations
    },
    onSubmit: (values) => {
      console.log("Form Submitted:", values);
    },
  });

  return (
        <Form>
          <TextInput
            label="Email"
            {...form.getInputProps("email")}
            // disabled
          />

          ... other inputs

          <Button
            title="Submit"
            disabled={form.hasErrors}
            onPress={form.submit}
          />
        </Form>

  );
}

```
