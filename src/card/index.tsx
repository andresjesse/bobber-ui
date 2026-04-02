import { Flex, type FlexProps } from "../flex";
import { makeStyles } from "../theme";
import { useShadowStyle } from "../theme/default-styles";
import CardDivider from "./divider";
import CardHeader from "./header";

type CardProps = FlexProps;

export function Card({ gap = "xs", children }: CardProps) {
  const { defaultShadow } = useShadowStyle();
  const styles = useStyles();

  return (
    <Flex gap={gap} style={[styles.container, defaultShadow]}>
      {children}
    </Flex>
  );
}

const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing("default"),
    borderRadius: theme.radius("default"),
    backgroundColor: theme.colors.background("auto", 1),
  },
}));

Card.Divider = CardDivider;
Card.Header = CardHeader;
