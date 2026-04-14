import { Card, Text } from "@andresjesse/bobber-ui";
import ExampleLink from "../example-link";

export default function DialogsModalsCard() {
  return (
    <Card>
      <Card.Header title="Dialogs & Modals" />

      <Text>
        Dialogs and modals are interactive elements that display important
        information or prompt user input in web applications. They are used to
        draw attention and require explicit user interaction to dismiss or
        close. Dialogs are triggered by "Dialog" functions, while modals are
        shown using the "useModal" hook and also have pre-defined "Modal"
        containers.
      </Text>

      <ExampleLink href="/dialogs-modals/dialogs" title="Dialogs" />

      <ExampleLink href="/dialogs-modals/modals" title="Modals" />
    </Card>
  );
}
