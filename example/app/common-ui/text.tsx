import { Card, Header, ScreenWrapper, Text } from "@andresjesse/bobber-ui";

export default function Screen() {
  return (
    <ScreenWrapper.Scrollable>
      <Header.Default title="Text" />

      <Card>
        <Text h1 firstChild>
          Heading H1
        </Text>

        <Text textAlign="justify">
          [textAlign="justify"] Lorem Ipsum is simply dummy text of the printing
          and typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s, when an unknown printer took a galley
          of type and scrambled it to make a type specimen book.
        </Text>

        <Text h2 firstChild>
          Heading H2
        </Text>

        <Text fontStyle="italic">
          [fontStyle="italic"] Lorem Ipsum is simply dummy text of the printing
          and typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s, when an unknown printer took a galley
          of type and scrambled it to make a type specimen book.
        </Text>

        <Text h3>Heading H3</Text>

        <Text fontWeight="bold">
          [fontWeight="bold"] Lorem Ipsum is simply dummy text of the printing
          and typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s, when an unknown printer took a galley
          of type and scrambled it to make a type specimen book.
        </Text>

        <Text h4>Heading H4</Text>

        {/* eslint-disable-next-line react-native/no-inline-styles */}
        <Text style={{ textTransform: "capitalize" }}>
          [customStyle with textTransform:"capitalize"] Lorem Ipsum is simply
          dummy text of the printing and typesetting industry. Lorem Ipsum has
          been the industry's standard dummy text ever since the 1500s, when an
          unknown printer took a galley of type and scrambled it to make a type
          specimen book.
        </Text>
      </Card>
    </ScreenWrapper.Scrollable>
  );
}
