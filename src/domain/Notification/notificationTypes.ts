export interface NotificationSettings {
  notification_token: string;
  user_id: string;
}

export type NotificationSettingsData = Omit<
  NotificationSettings,
  "notification_token" | "user_id"
>;

export type GetNotificationSettings = {
  userId: string;
};

export type UpdateNotificationSetting = {
  userId: string;
  state: boolean | string | null;
  key: keyof NotificationSettingsData | string;
};
