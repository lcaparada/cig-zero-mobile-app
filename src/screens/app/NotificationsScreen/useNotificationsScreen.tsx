import { useEffect, useState } from "react";

import { NotificationSettingsData, useGetNotificationSettings } from "@domain";
import { useAuth } from "@services";

export const useNotificationsScreen = () => {
  const { session } = useAuth();

  const { notificationSettings: notificationSettingsData, isFetching } =
    useGetNotificationSettings(session?.user?.id ?? "");

  const [notificationSettings, setNotificationSettings] =
    useState<NotificationSettingsData | null>(null);

  useEffect(() => {
    if (!isFetching && notificationSettingsData) {
      setNotificationSettings(notificationSettingsData);
    }
  }, [notificationSettingsData, isFetching]);

  return {
    isFetching,
    notificationSettings,
  };
};
