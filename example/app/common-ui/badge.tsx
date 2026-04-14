import {
  Badge,
  Flex,
  Header,
  Icon,
  ScreenWrapper,
} from "@andresjesse/bobber-ui";

export default function Screen() {
  return (
    <ScreenWrapper.Scrollable>
      <Header.Default title="Badge" />

      <Flex direction="row" gap="md">
        <Flex direction="row" wrap="wrap" align="center">
          <Badge size="xs" color="green">
            XS
          </Badge>

          <Badge size="sm" color="lime">
            SM
          </Badge>

          <Badge size="md" color="blue">
            MD
          </Badge>

          <Badge size="lg" color="yellow">
            LG
          </Badge>

          <Badge size="xl" color="orange">
            XL
          </Badge>

          <Badge color="red">
            <Icon type="material" name="notification-add" color="white" />
          </Badge>
        </Flex>
      </Flex>
    </ScreenWrapper.Scrollable>
  );
}
