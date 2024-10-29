import { Screen } from "@components";

import { NotificationSettingsData } from "@domain";

import { NotificationSkeleton, Section } from "./components";
import { useNotificationsScreen } from "./useNotificationsScreen";

export const NotificationsScreen = () => {
  const { isFetching, notificationSettings } = useNotificationsScreen();

  const handleGetNotificationConfig = () => {
    return [
      {
        key: "daily_motivational_messages",
        title: "Mensagens Diárias de Incentivo",
        description:
          "Ative para receber mensagens motivacionais diárias e manter-se inspirado em sua jornada.",
      },
      {
        key: "achievement_notifications",
        title: "Notificações de Conquistas",
        description:
          "Receba notificações sempre que desbloquear uma nova conquista e acompanhe seu progresso ao longo do tempo.",
      },
    ];
  };

  return (
    <Screen
      canGoBack
      scrollable
      screenTitle={"Notificações"}
      insets={{ bottom: "s0", left: "s24", right: "s24", top: "s0" }}
    >
      {!isFetching && notificationSettings ? (
        <Section
          items={handleGetNotificationConfig().map(
            ({ key, title, description }) => ({
              title,
              description,
              notificationKey: key as keyof NotificationSettingsData,
              isActive:
                notificationSettings[key as keyof NotificationSettingsData],
            })
          )}
        />
      ) : (
        <NotificationSkeleton />
      )}
    </Screen>
  );
};
