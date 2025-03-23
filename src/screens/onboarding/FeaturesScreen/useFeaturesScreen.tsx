import { useRef, useState } from "react";
import {
  ScrollView,
  LayoutChangeEvent,
  NativeScrollEvent,
  NativeSyntheticEvent,
  useWindowDimensions,
} from "react-native";

import { useAppSafeAreaContext } from "@hooks";

import { useUpdateNotificationSetting } from "@domain";
import { registerForPushNotificationsAsync } from "@helpers";
import { useAuth } from "@services";

import { OnboardingScreenSchemaType } from "../OnboardingScreen/schema/onboardingScreenSchema";

type InitSessionProps = Pick<
  OnboardingScreenSchemaType,
  "likeToReceiveDailyReminders"
>;

export const useFeaturesScreen = () => {
  const [pageHeight, setPageHeight] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);

  const { updateNotificationSetting } = useUpdateNotificationSetting();

  const { session, updateNewUserStatus, createFirstAppLaunch } = useAuth();

  const scrollRef = useRef<ScrollView>(null);
  const { bottom } = useAppSafeAreaContext();
  const { width: WIDTH_SCREEN } = useWindowDimensions();

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

  function initSession(params: InitSessionProps) {
    if (params.likeToReceiveDailyReminders === "YES" && session) {
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
  }

  return {
    bottom,
    scrollRef,
    currentPage,
    WIDTH_SCREEN,
    initSession,
    handleScroll,
    handleLayout,
    scrollToPage,
  };
};
