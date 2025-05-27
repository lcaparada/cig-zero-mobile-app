import { useRef, useState } from "react";
import {
  ScrollView,
  LayoutChangeEvent,
  NativeScrollEvent,
  NativeSyntheticEvent,
  useWindowDimensions,
} from "react-native";

import { useAppSafeAreaContext } from "@hooks";

import { useNavigation } from "@react-navigation/native";
import { useAuth, useSettings } from "@services";
import { registerForPushNotificationsAsync } from "@helpers";
import { useUpdateNotificationSetting } from "@domain";

export const useFeaturesScreen = () => {
  const [pageHeight, setPageHeight] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);

  const { updateNotificationSetting } = useUpdateNotificationSetting();

  const navigation = useNavigation();

  const { session, updateNewUserStatus, createFirstAppLaunch } = useAuth();

  const { likeToReceiveDailyReminders } = useSettings();

  const scrollRef = useRef<ScrollView>(null);
  const { bottom } = useAppSafeAreaContext();
  const { width: WIDTH_SCREEN, height: HEIGHT_SCREEN } = useWindowDimensions();

  const handleLayout = (event: LayoutChangeEvent) => {
    const height = event.nativeEvent.layout.height;
    setPageHeight(height);
  };

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const yOffset = event.nativeEvent.contentOffset.y;
    const page = Math.round(yOffset / pageHeight);
    setCurrentPage(page);
  };

  const scrollToPage = (page: number) => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({ y: page * pageHeight, animated: true });
    }
  };

  function navigateToSubscriptionScreen() {
    navigation.navigate("SubscriptionScreen");
  }

  const handleInitSession = () => {
    if (likeToReceiveDailyReminders === "YES" && session) {
      registerForPushNotificationsAsync().then((token) => {
        updateNotificationSetting({
          state: token ?? null,
          userId: session?.user?.id,
          key: "notification_token",
        });
      });
    }
    createFirstAppLaunch();
    updateNewUserStatus(false);
  };

  return {
    bottom,
    scrollRef,
    currentPage,
    WIDTH_SCREEN,
    HEIGHT_SCREEN,
    handleScroll,
    handleLayout,
    scrollToPage,
    handleInitSession,
    navigateToSubscriptionScreen,
  };
};
