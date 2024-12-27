import { useEffect, useState } from "react";
import { Platform } from "react-native";

import * as Sentry from "@sentry/react-native";
import { ThemeProvider } from "@shopify/restyle";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { setDefaultOptions } from "date-fns";
import { ptBR } from "date-fns/locale";
import { useFonts } from "expo-font";
import * as Notifications from "expo-notifications";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import RevenueCat from "react-native-purchases";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { Splash, Toast } from "@components";
import { Route } from "@routes";
import { theme } from "@theme";

import { AuthProvider, ToastProvider } from "@services";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

Sentry.init({
  dsn: process.env.EXPO_PUBLIC_SENTRY_DSN,
  debug: process.env.EXPO_PUBLIC_NODE_ENV === "DEV" ? true : false,
});

function App() {
  const [splashComplete, setSplashComplete] = useState(false);

  const [loaded, error] = useFonts({
    "SFProRounded-Regular": require("./assets/fonts/SF-Pro-Rounded-Regular.otf"),
    "SFProRounded-Medium": require("./assets/fonts/SF-Pro-Rounded-Medium.otf"),
    "SFProRounded-Semibold": require("./assets/fonts/SF-Pro-Rounded-Semibold.otf"),
    "SFProRounded-Bold": require("./assets/fonts/SF-Pro-Rounded-Bold.otf"),
  });

  useEffect(() => {
    RevenueCat.setLogLevel(RevenueCat.LOG_LEVEL.VERBOSE);
    if (Platform.OS === "ios") {
      RevenueCat.configure({ apiKey: "appl_ZgnVRfDLhSQVjUZWNVXrSmcZZNY" });
    } else if (Platform.OS === "android") {
      RevenueCat.configure({ apiKey: "" });
    }
  }, []);

  useEffect(() => {
    setDefaultOptions({ locale: ptBR });
  }, []);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <ThemeProvider theme={theme}>
          <ToastProvider>
            <QueryClientProvider client={queryClient}>
              <AuthProvider>
                <Route />
                {(!loaded && !error) || !splashComplete ? (
                  <Splash onComplete={setSplashComplete} />
                ) : null}
                <Toast />
              </AuthProvider>
            </QueryClientProvider>
          </ToastProvider>
        </ThemeProvider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}

export default Sentry.wrap(App);
