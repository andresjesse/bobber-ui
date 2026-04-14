import {
  Button,
  Flex,
  Header,
  Icon,
  ScreenWrapper,
} from "@andresjesse/bobber-ui";

export default function Screen() {
  return (
    <ScreenWrapper.Scrollable>
      <Header.Default title="Button" />

      <Button
        title="Filled"
        variant="filled"
        onPress={() => console.log("pressed")}
      />

      <Button
        title="Light"
        variant="light"
        onPress={() => console.log("pressed")}
      />

      <Button
        title="Outline"
        variant="outline"
        onPress={() => console.log("pressed")}
      />

      <Button
        title="Subtle"
        variant="subtle"
        onPress={() => console.log("pressed")}
      />

      <Button
        title="Button xs"
        size="xs"
        color="red"
        onPress={() => console.log("pressed")}
      />
      <Button
        title="Button sm"
        size="sm"
        color="green"
        onPress={() => console.log("pressed")}
      />
      <Button
        title="Button md"
        size="md"
        color="indigo"
        onPress={() => console.log("pressed")}
      />
      <Button
        title="Button lg"
        size="lg"
        color="yellow"
        onPress={() => console.log("pressed")}
      />
      <Button
        title="Button xl"
        size="xl"
        color="orange"
        onPress={() => console.log("pressed")}
      />

      <Flex direction="row" gap={0}>
        <Button
          title="Full Width"
          fullWidth
          onPress={() => console.log("pressed")}
        />
        <Button
          title="Custom Styles"
          size="md"
          onPress={() => console.log("pressed")}
          // eslint-disable-next-line react-native/no-inline-styles
          containerStyle={{ backgroundColor: "pink" }}
          // eslint-disable-next-line react-native/no-inline-styles
          textStyle={{ color: "black", fontWeight: "regular" }}
        />
      </Flex>

      <Button
        title="Sections"
        leftSection={<Icon type="material" name="phone" color="white" />}
        rightSection={
          <Icon type="material-community" name="dots-square" color="white" />
        }
        justify="space-between"
        onPress={() => console.log("pressed")}
      />

      <Button
        title="Disabled"
        disabled
        onPress={() => console.log("pressed")}
      />
    </ScreenWrapper.Scrollable>
  );
}
