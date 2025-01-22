import { Fragment, useEffect } from "react";
import { Platform } from "react-native";

import { useNetInfo } from "@react-native-community/netinfo";
import * as Sentry from "@sentry/react-native";
import { ThemeProvider } from "@shopify/restyle";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { setDefaultOptions } from "date-fns";
import { ptBR } from "date-fns/locale";
import { useFonts } from "expo-font";
import * as Notifications from "expo-notifications";
import { requestTrackingPermissionsAsync } from "expo-tracking-transparency";
import { Settings } from "react-native-fbsdk-next";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import RevenueCat from "react-native-purchases";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { Splash, Toast } from "@components";
import { Route } from "@routes";
import { NetworkErrorScreen } from "@screens";
import { darkTheme, theme } from "@theme";

import {
  useSplash,
  useAppColor,
  AuthProvider,
  ToastProvider,
  useRevenueCatStore,
} from "@services";

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
  debug: false,
});

function App() {
  const { splashComplete } = useSplash();
  const { appTheme } = useAppColor();

  const { checkIfUserIsPremium } = useRevenueCatStore();

  const netInfo = useNetInfo();

  const [loaded, error] = useFonts({
    "SFProRounded-Regular": require("./assets/fonts/SF-Pro-Rounded-Regular.otf"),
    "SFProRounded-Medium": require("./assets/fonts/SF-Pro-Rounded-Medium.otf"),
    "SFProRounded-Semibold": require("./assets/fonts/SF-Pro-Rounded-Semibold.otf"),
    "SFProRounded-Bold": require("./assets/fonts/SF-Pro-Rounded-Bold.otf"),
  });

  const requestTrackingPermission = async () => {
    const { status } = await requestTrackingPermissionsAsync();
    if (status === "granted") {
      Settings.initializeSDK();
      await Settings.setAdvertiserTrackingEnabled(true);
    }
  };

  useEffect(() => {
    requestTrackingPermission();
  }, []);

  useEffect(() => {
    RevenueCat.setLogLevel(RevenueCat.LOG_LEVEL.VERBOSE);
    if (Platform.OS === "ios") {
      RevenueCat.configure({ apiKey: "appl_ZgnVRfDLhSQVjUZWNVXrSmcZZNY" });
    } else if (Platform.OS === "android") {
      RevenueCat.configure({ apiKey: "goog_rPjtZoHkGCzKRgjzvbLdxhpizUw" });
    }
  }, []);

  useEffect(() => {
    checkIfUserIsPremium();

    setDefaultOptions({ locale: ptBR });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <ThemeProvider theme={appTheme === "dark" ? darkTheme : theme}>
          <ToastProvider>
            <QueryClientProvider client={queryClient}>
              <AuthProvider>
                {netInfo.isConnected ? (
                  <Fragment>
                    <Route />
                    {(!loaded && !error) || !splashComplete ? <Splash /> : null}
                    <Toast />
                  </Fragment>
                ) : (
                  <NetworkErrorScreen />
                )}
              </AuthProvider>
            </QueryClientProvider>
          </ToastProvider>
        </ThemeProvider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}

export default Sentry.wrap(App);
