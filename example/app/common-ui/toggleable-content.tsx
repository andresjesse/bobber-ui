import {
  Card,
  Flex,
  Header,
  ScreenWrapper,
  Text,
  ToggleableContent,
} from "@andresjesse/bobber-ui";

export default function Screen() {
  return (
    <ScreenWrapper.Scrollable>
      <Header.Default title="Text" />

      <Card>
        <Text h2 firstChild>
          Meteor 350 Specifications
        </Text>

        <Text>A classic cruiser designed for the open road.</Text>

        <ToggleableContent
          header={{ open: "Hide Details", closed: "Show Technical Specs" }}
          gap="md"
          style={{ marginTop: 10 }}
        >
          <Flex gap="xs">
            <Text fontWeight="bold">Engine:</Text>
            <Text>349cc, Single cylinder, 4 stroke, Air-Oil cooled</Text>

            <Text fontWeight="bold">Max Power:</Text>
            <Text>20.2 BHP @ 6100 rpm</Text>

            <Text fontWeight="bold">Fuel Capacity:</Text>
            <Text>15 Liters</Text>
          </Flex>
        </ToggleableContent>
      </Card>
    </ScreenWrapper.Scrollable>
  );
}
