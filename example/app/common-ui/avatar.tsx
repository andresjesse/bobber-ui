import { Avatar, Flex, Header, ScreenWrapper } from "@andresjesse/bobber-ui";

export default function Screen() {
  return (
    <ScreenWrapper.Scrollable>
      <Header.Default title="Avatar" />

      <Flex direction="row" gap="md">
        <Avatar
          avatarUrl="https://i.pravatar.cc/150?u=a042581f4e29026704d"
          size={48}
        />

        <Avatar avatarUrl="https://i.pravatar.cc/150?u=a042581f4e29026704d" />

        <Avatar
          avatarUrl="https://i.pravatar.cc/150?u=a042581f4e29026704d"
          style={{ borderWidth: 2, borderColor: "white", borderRadius: 8 }}
        />
      </Flex>
    </ScreenWrapper.Scrollable>
  );
}
