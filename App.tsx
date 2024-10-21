import { useEffect } from "react";

import { ThemeProvider } from "@shopify/restyle";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { Route } from "@routes";
import { theme } from "@theme";

export default function App() {
  const [loaded, error] = useFonts({
    "SFProRounded-Regular": require("./src/assets/fonts/SF-Pro-Rounded-Regular.otf"),
    "SFProRounded-Medium": require("./src/assets/fonts/SF-Pro-Rounded-Medium.otf"),
    "SFProRounded-Semibold": require("./src/assets/fonts/SF-Pro-Rounded-Semibold.otf"),
    "SFProRounded-Bold": require("./src/assets/fonts/SF-Pro-Rounded-Bold.otf"),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <Route />
      </ThemeProvider>
    </SafeAreaProvider>
  );
}
