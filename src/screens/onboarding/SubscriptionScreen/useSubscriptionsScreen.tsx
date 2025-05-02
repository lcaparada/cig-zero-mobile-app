import { useEffect } from "react";

import { useUpdateNotificationSetting } from "@domain";
import { registerForPushNotificationsAsync } from "@helpers";
import {
  useAuth,
  useRevenueCatService,
  useSettings,
  useToastService,
} from "@services";

export const useSubscriptionsScreen = () => {
  const { updateNotificationSetting } = useUpdateNotificationSetting();

  const { session, updateNewUserStatus, createFirstAppLaunch } = useAuth();

  const { likeToReceiveDailyReminders } = useSettings();

  const {
    packages,
    metadata,
    isLoading,
    loadProducts,
    selectedPackage,
    purchasePackage,
    availableIntroPrice,
  } = useRevenueCatService();

  const { showToast } = useToastService();

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

  const handlePurchasePackage = async () => {
    try {
      if (process.env.EXPO_PUBLIC_NODE_ENV === "DEV") {
        handleInitSession();
        return;
      }
      await purchasePackage();
      handleInitSession();
    } catch (error: any) {
      if (error.code === "1") {
        console.log(error);
        return;
      }
      showToast({
        duration: 7000,
        type: "error",
        message: "Ocorreu um erro ao tentar realizar a compra.",
      });
    }
  };

  useEffect(() => {
    loadProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    packages,
    metadata,
    isLoading,
    selectedPackage,
    availableIntroPrice,
    handlePurchasePackage,
  };
};
