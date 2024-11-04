import { useEffect, useState } from "react";

import { isDevice } from "expo-device";
import * as Notifications from "expo-notifications";

export const useNotificationsSettings = () => {
  const [areNotificationsActive, setAreNotificationsActive] = useState(true);

  async function checkNotificationPermission() {
    if (!isDevice) {
      setAreNotificationsActive(false);
      return;
    }

    const { status: existingStatus } =
      await Notifications.getPermissionsAsync();

    switch (existingStatus) {
      case "undetermined":
        setAreNotificationsActive(false);
        break;
      case "denied":
        setAreNotificationsActive(false);
        break;
      case "granted":
        setAreNotificationsActive(true);
        break;
      default:
        setAreNotificationsActive(false);
    }
  }

  useEffect(() => {
    checkNotificationPermission();
  }, []);

  return {
    areNotificationsActive,
  };
};
