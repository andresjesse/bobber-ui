import { Stack } from "expo-router";
import { View } from "react-native";
import { makeStyles } from "../../theme";
import { CustomHeader } from "../custom-header";

type DefaultHeaderProps = {
  title: string;
  headerBackVisible?: boolean;
  menu?: React.ReactNode;
};

export function DefaultHeader({
  title,
  headerBackVisible = true,
  menu,
}: DefaultHeaderProps) {
  const styles = useStyles();

  return (
    <Stack.Screen
      options={{
        animation: "fade",
        title,
        headerShown: true,
        // eslint-disable-next-line react/no-unstable-nested-components
        header: (props: any) => <CustomHeader {...props} />,
        // eslint-disable-next-line react/no-unstable-nested-components
        headerRight: () => menu || <View style={styles.noMenu} />,
        headerBackVisible,
      }}
    />
  );
}

const useStyles = makeStyles(() => ({
  // this style mimics HeaderMenu.Container icon to keep header height consistent when screen has no menu
  noMenu: {
    width: 0,
    height: 32,
    margin: 8,
  },
}));
