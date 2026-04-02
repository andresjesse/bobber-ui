import { View } from "react-native";

import { makeStyles } from "../../theme";

export default function HeaderMenuDivider() {
  const styles = useStyles();

  return <View style={styles.divider} />;
}

const useStyles = makeStyles((theme) => ({
  divider: {
    backgroundColor: theme.colors.foreground("auto"),
    height: 0.5,
  },
}));
