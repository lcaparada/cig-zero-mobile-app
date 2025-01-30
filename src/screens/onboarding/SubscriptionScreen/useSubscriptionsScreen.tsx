import { useEffect } from "react";

import { useUpdateNotificationSetting } from "@domain";
import { registerForPushNotificationsAsync } from "@helpers";
import { useAuth, useRevenueCatService, useToastService } from "@services";

import { OnboardingScreenSchemaType } from "../OnboardingScreen/schema/onboardingScreenSchema";

type InitSessionProps = Pick<
  OnboardingScreenSchemaType,
  "likeToReceiveDailyReminders"
>;

export const useSubscriptionsScreen = () => {
  const { updateNotificationSetting } = useUpdateNotificationSetting();

  const { session, updateNewUserStatus } = useAuth();

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

  const handleInitSession = (params: InitSessionProps) => {
    if (params.likeToReceiveDailyReminders === "YES" && session) {
      registerForPushNotificationsAsync().then((token) => {
        updateNotificationSetting({
          state: token ?? null,
          userId: session?.user?.id,
          key: "notification_token",
        });
      });
    }
    updateNewUserStatus(false);
  };

  const handlePurchasePackage = async (params: InitSessionProps) => {
    try {
      if (process.env.EXPO_PUBLIC_NODE_ENV === "DEV") {
        handleInitSession(params);
        return;
      }
      await purchasePackage();
      handleInitSession(params);
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
