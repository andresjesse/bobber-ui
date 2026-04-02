import { Text } from "../text";
import { makeStyles } from "../theme";

type FieldErrorsProps = {
  errors?: string[];
};

export default function FieldErrors({ errors }: FieldErrorsProps) {
  const styles = useStyles();

  return errors?.map((error, index) => (
    <Text key={index} style={styles.error}>
      {error}
    </Text>
  ));
}

const useStyles = makeStyles((theme) => ({
  error: {
    color: theme.colors.get("red"),
    fontSize: theme.fontSize("default") - 2,
  },
}));
