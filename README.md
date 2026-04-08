# bobber-ui

_A UI library just like bobber motorcycles: If it’s not essential for the ride, remove it!_

Cross platform React Native UI:

- **Lightweight**: Just like the bike, this lib has no "fat" or unnecessary code;
- **Customizable**: Bobbers are made to be unique. This lib allows the developer to customize components easily;
- **Timeless**: The Bobber look never goes out of style because it’s based on classic proportions.

## TODO:

- Review this Readme;
- Re-enable lefthook;
- Test lib on empty Navigation template project;
- Test lib in a clean empty Expo project;
- Review use-modal-close-on-back usePreventRemove usage (currently disabled);

## Installation

1. Start a brand new expo project using "Navigation (TypeScript)" template:

`yarn create expo --template`

> Select "Navigation (TypeScript)"

2. Add bobber-ui:

```sh
yarn add @andresjesse/bobber-ui
```

3. Add required dependencies:

```sh
npx expo install @react-native-async-storage/async-storage react-native-keyboard-controller zustand zod
```

4. Update your Root Layout (`app/_layout.tsx`):

```tsx
import { Modal, ThemedStatusBar, ThemeProvider } from "@andresjesse/bobber-ui";
import { Stack } from "expo-router";
import { KeyboardProvider } from "react-native-keyboard-controller";

export default function RootLayout() {
  return (
    <KeyboardProvider>
      <ThemeProvider defaultColorScheme="dark">
        <ThemedStatusBar />

        <Stack
          screenOptions={{
            headerShown: false,
            animation: "fade",
          }}
        />

        <Modal />
      </ThemeProvider>
    </KeyboardProvider>
  );
}
```

5. Create a Home Screen (`app/index.tsx`):

```tsx
import { Button, ScreenWrapper, Text } from "@andresjesse/bobber-ui";

export default function Screen() {
  return (
    <ScreenWrapper.Scrollable>
      <Text h1>Home</Text>
      <Button title="Hello Bobber" />
    </ScreenWrapper.Scrollable>
  );
}
```

## Usage

Check [example app](/example/) project.

## Contributing

- [Development workflow](CONTRIBUTING.md#development-workflow)
- [Sending a pull request](CONTRIBUTING.md#sending-a-pull-request)
- [Code of conduct](CODE_OF_CONDUCT.md)

## Lib Development

To update this lib:

- Make sure you have a NPM account and it has write permissions in the npm package;
- Login to your account and generate a new Access Token with 2FA bypass enabled and marked for read and write;
- Copy your token and add it to `.npmrc`: `//registry.npmjs.org/:_authToken=YOUR_TOKEN_HERE`
- `yarn prepare`
- `yarn release`

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
