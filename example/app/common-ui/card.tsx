import {
  Badge,
  Card,
  Header,
  ScreenWrapper,
  Text,
} from "@andresjesse/bobber-ui";

export default function Screen() {
  return (
    <ScreenWrapper.Scrollable>
      <Header.Default title="Card" />

      <Card>
        <Text>Simple Card</Text>
      </Card>

      <Card>
        <Card.Header title="Header Title" />

        <Text>Card with Card.Header</Text>
      </Card>

      <Card>
        <Card.Header
          title="Header Title"
          rightSection={<Badge color="red">Hot!</Badge>}
        />

        <Text>Card.Header with rightSection</Text>
      </Card>

      <Card gap="xl">
        <Text>Card with Card.Divider</Text>

        <Card.Divider />

        <Text>And custom gap (xl)</Text>
      </Card>
    </ScreenWrapper.Scrollable>
  );
}
