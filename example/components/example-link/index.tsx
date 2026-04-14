import { Flex, Icon, makeStyles, Text } from "@andresjesse/bobber-ui";
import { Link, type LinkProps } from "expo-router";

type ExampleLinkProps = {
  title: string;
} & LinkProps;

export default function ExampleLink({ href, title }: ExampleLinkProps) {
  const styles = useStyles();

  return (
    <Link href={href} asChild>
      <Flex
        direction="row"
        align="center"
        justify="space-between"
        style={styles.container}
      >
        <Text>{title}</Text>
        <Icon type="material-community" name="open-in-new" size={20} />
      </Flex>
    </Link>
  );
}

const useStyles = makeStyles((theme) => {
  return {
    container: {
      padding: theme.spacing("md"),
      borderRadius: theme.radius("default"),
      backgroundColor: theme.colors.select(
        theme.colors.get("gray", 2)!,
        theme.colors.get("gray", 7)!
      ),
    },
  };
});
