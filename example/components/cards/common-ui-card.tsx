import { Card, Text } from "@andresjesse/bobber-ui";
import ExampleLink from "../example-link";

export default function CommonUICard() {
  return (
    <Card>
      <Card.Header title="Common UI" />

      <Text>
        This section showcases a collection of common UI components. These
        components are designed to enhance the user experience and provide a
        consistent and intuitive interface.
      </Text>

      <ExampleLink href="/common-ui/avatar" title="Avatar" />

      <ExampleLink href="/common-ui/badge" title="Badge" />
    </Card>
  );
}
