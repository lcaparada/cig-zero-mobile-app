import { useEffect, useState } from "react";

import { useNotificationsSettings } from "@hooks";

import { NotificationSettingsData, useGetNotificationSettings } from "@domain";
import { useAuth, useToastService } from "@services";

export const useNotificationsScreen = () => {
  const { session } = useAuth();

  const { areNotificationsActive } = useNotificationsSettings();

  const { showToast } = useToastService();

  const { notificationSettings: notificationSettingsData, isFetching } =
    useGetNotificationSettings(session?.user?.id ?? "");

  const [notificationSettings, setNotificationSettings] =
    useState<NotificationSettingsData | null>(null);

  useEffect(() => {
    if (!isFetching && notificationSettingsData) {
      setNotificationSettings(notificationSettingsData);
    }
  }, [notificationSettingsData, isFetching]);

  useEffect(() => {
    if (!areNotificationsActive) {
      showToast({
        type: "error",
        duration: 7000,
        message:
          "Notamos que as notificações do nosso app estão desativadas! 😊 Que tal ativá-las para aproveitar uma experiência completa?",
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [areNotificationsActive]);

  return {
    isFetching,
    notificationSettings,
    areNotificationsActive,
  };
};
