import { Flex } from "../flex";
import { Text } from "../text";
import { makeStyles } from "../theme";

type CardHeaderProps = {
  title: string;
  rightSection?: React.ReactNode;
};

export default function CardHeader({ title, rightSection }: CardHeaderProps) {
  const styles = useStyles();

  return (
    <Flex direction="row" justify="space-between" align="center">
      <Text h4 firstChild style={styles.text}>
        {title}
      </Text>

      {rightSection}
    </Flex>
  );
}

const useStyles = makeStyles(() => ({
  text: {
    marginBottom: 0,
  },
}));
