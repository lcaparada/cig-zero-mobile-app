import { useQuery } from "@tanstack/react-query";

import { QueryKeys } from "@infra";
import { useToastService } from "@services";

import { notificationService } from "../notificationService";
import { NotificationSettingsData } from "../notificationTypes";

export const useGetNotificationSettings = (userId: string) => {
  const { showToast } = useToastService();

  const {
    data: notificationSettings,
    isFetching,
    error,
  } = useQuery<unknown, Error, NotificationSettingsData>({
    queryKey: [QueryKeys.GetNotificationSettings, userId],
    queryFn: () => notificationService.getNotificationSettings({ userId }),
  });

  if (error) {
    showToast({ message: error.message, duration: 5000, type: "error" });
  }

  return {
    isFetching,
    notificationSettings,
  };
};
