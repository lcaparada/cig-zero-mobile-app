import { useCallback, useState } from "react";

import { useFocusEffect } from "@react-navigation/native";
import { useQueryClient } from "@tanstack/react-query";
import { useCopilot } from "react-native-copilot";

import { useAppTheme, useTutorial } from "@hooks";

import {
  useGetPhraseOfDay,
  useUpdateNotificationToken,
  useUpdateUserInformation,
} from "@domain";
import { registerForPushNotificationsAsync } from "@helpers";
import { QueryKeys } from "@infra";

export const useHomeScreen = () => {
  const { handleUpdateUserInformation } = useUpdateUserInformation();

  const { updateNotificationToken } = useUpdateNotificationToken();
  const { phrase } = useGetPhraseOfDay();

  const { start } = useCopilot();

  const { colors } = useAppTheme();

  const [isRefreshing, setIsRefreshing] = useState(false);

  const queryClient = useQueryClient();

  const { scrollRef, showStartTutorialPopup, setShowStartTutorialPopup } =
    useTutorial();

  const handleRefresh = async () => {
    if (isRefreshing) return null;
    setIsRefreshing(true);
    const queryKeys = [
      QueryKeys.GetProgressData,
      QueryKeys.GetHistoricData,
      QueryKeys.GetMissions,
      QueryKeys.GetLatestSmokingRecord,
    ];
    try {
      await Promise.all(
        queryKeys.map((key) => queryClient.refetchQueries({ queryKey: [key] }))
      );
    } catch (error) {
      console.error("Error when try refresh data in Home Screen", error);
    } finally {
      setIsRefreshing(false);
    }
  };

  const handleGetNotificationTokenAndUpdate = async () => {
    try {
      const notificationToken = await registerForPushNotificationsAsync();
      await updateNotificationToken({
        notificationToken: notificationToken ?? "",
      });
    } catch (error) {
      console.error(error);
    }
  };

  useFocusEffect(
    useCallback(() => {
      handleUpdateUserInformation({
        last_activity_at: new Date().toISOString(),
      });
      if (process.env.EXPO_PUBLIC_NODE_ENV === "PROD") {
        handleGetNotificationTokenAndUpdate();
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
  );

  return {
    colors,
    phrase,
    scrollRef,
    isRefreshing,
    showStartTutorialPopup,
    setShowStartTutorialPopup,
    start,
    handleRefresh,
  };
};
