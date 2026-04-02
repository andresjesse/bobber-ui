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

1. Recommended:

Start a brand new expo project using "Navigation (TypeScript)" template; Then add bobber-ui dependency.

2. Manual installation:

Add bobber-ui:

```sh
yarn add andresjesse/bobber-ui
```

Add Async Storage:

```sh
npx expo install @react-native-async-storage/async-storage
```

Setup Expo Router (if your project does not use it yet): https://docs.expo.dev/router/installation/#manual-installation

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
