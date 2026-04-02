import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { KeyboardProvider } from "react-native-keyboard-controller";

import "react-native-reanimated";

import { Modal, ThemedStatusBar, ThemeProvider } from "@andresjesse/bobber-ui";
import { Stack } from "expo-router";

// ----------------------------------------------------------- Root Layout:

const customFonts = {
  Roboto: require("../assets/fonts/Roboto-Regular.ttf"),
};

function RootLayout() {
  return (
    <KeyboardProvider>
      <ThemeProvider defaultColorScheme="dark">
        <ThemedStatusBar />

        <Stack
          screenOptions={{
            headerShown: false,
            animation: "fade",
          }}
        />

        <Modal />
      </ThemeProvider>
    </KeyboardProvider>
  );
}

// ----------------------------------------------------------- Expo Defaults:

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: "/",
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function Layout() {
  const [loaded, error] = useFonts({
    ...customFonts,
    ...FontAwesome.font,
  });

  useEffect(() => {
    // Expo Router uses Error Boundaries to catch errors in the navigation tree.
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayout />;
}
