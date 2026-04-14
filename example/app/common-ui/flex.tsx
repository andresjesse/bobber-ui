import { Flex, Header, ScreenWrapper } from "@andresjesse/bobber-ui";
import { View } from "react-native";

export default function Screen() {
  return (
    <ScreenWrapper.Scrollable>
      <Header.Default title="Flex" />

      <Flex
        direction="row"
        align="center"
        justify="space-between"
        style={{ backgroundColor: "#f0f0f0" }}
      >
        <View style={{ width: 50, height: 50, backgroundColor: "red" }} />
        <View style={{ width: 50, height: 50, backgroundColor: "blue" }} />
        <View style={{ width: 50, height: 50, backgroundColor: "green" }} />
      </Flex>

      <Flex
        direction="row"
        align="center"
        gap="xs"
        style={{ backgroundColor: "#f0f0f0" }}
      >
        <View style={{ width: 50, height: 50, backgroundColor: "red" }} />
        <View style={{ width: 50, height: 50, backgroundColor: "blue" }} />
        <View style={{ width: 50, height: 50, backgroundColor: "green" }} />
      </Flex>

      <Flex align="flex-end" style={{ backgroundColor: "#f0f0f0" }}>
        <View style={{ width: 50, height: 50, backgroundColor: "red" }} />
        <View style={{ width: 50, height: 50, backgroundColor: "blue" }} />
        <View style={{ width: 50, height: 50, backgroundColor: "green" }} />
      </Flex>
    </ScreenWrapper.Scrollable>
  );
}
