import { View } from "react-native";
import { makeStyles } from "../theme";

export default function CardDivider() {
  const styles = useStyles();

  return <View style={styles.divider} />;
}

const useStyles = makeStyles((theme) => ({
  divider: {
    backgroundColor: theme.colors.get("gray", [6, 5]),
    height: 0.5,
  },
}));
