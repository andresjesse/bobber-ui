import {
  Button,
  Card,
  Checkbox,
  Header,
  ScreenWrapper,
  TextInput,
} from "@andresjesse/bobber-ui";
import { router } from "expo-router";
import { useState } from "react";

export default function Screen() {
  const [center, setCenter] = useState(true);
  const [keyboardAware, setKeyboardAware] = useState(true);

  return (
    <ScreenWrapper.Fullscreen center={center} keyboardAware={keyboardAware}>
      <Header.Hidden />

      <Card>
        <TextInput label="Email" placeholder="email@example.com" />
        <TextInput label="Password" secureTextEntry />
        <Checkbox
          label="ScreenWrapper.FullScreen center"
          checked={center}
          onChange={setCenter}
        />
        <Checkbox
          label="ScreenWrapper.FullScreen keyboardAware"
          checked={keyboardAware}
          onChange={setKeyboardAware}
        />
        <Button title="Login" onPress={() => router.back()} />

        <Button
          variant="subtle"
          title="Cancel (Navigate Back)"
          onPress={() => router.back()}
        />
      </Card>
    </ScreenWrapper.Fullscreen>
  );
}
