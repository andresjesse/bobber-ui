import { Card, Text } from "@andresjesse/bobber-ui";
import ExampleLink from "../example-link";

export default function ScreenWrappersCard() {
  return (
    <Card>
      <Card.Header title="ScreenWrappers" />

      <Text>
        The ScreenWrapper acts as the core structural foundation of the library,
        ensuring a consistent layout across all application views. It abstractly
        manages essential interface constraints, such as safe area insets,
        keyboard-avoiding behavior, and standardized padding, without adding
        unnecessary complexity to the component tree. By centralizing these
        low-level layout requirements, the ScreenWrapper allows developers to
        focus entirely on building functional features while maintaining a
        stable and responsive environment for the user interface.
      </Text>

      <Text fontWeight="bold">Examples: </Text>

      <ExampleLink
        href="/screen-wrappers/fullscreen"
        title="ScreenWrapper.Fullscreen"
      />

      <ExampleLink
        title="ScreenWrapper.Scrollable"
        href={"/screen-wrappers/scrollable"}
      />
    </Card>
  );
}
