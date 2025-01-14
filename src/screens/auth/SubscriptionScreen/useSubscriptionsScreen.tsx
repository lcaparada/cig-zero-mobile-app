import { useEffect } from "react";

import {
  useAuthSignInAnonymously,
  useUpdateNotificationSetting,
} from "@domain";
import { registerForPushNotificationsAsync } from "@helpers";
import { useRevenueCatService, useToastService } from "@services";

import { OnboardingScreenSchemaType } from "../OnboardingScreen/schema/onboardingScreenSchema";

export const useSubscriptionsScreen = () => {
  const { handleSignInAnonymously, isPending } = useAuthSignInAnonymously();
  const { updateNotificationSetting } = useUpdateNotificationSetting();

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

  const authenticateSignInAnonymously = async (
    params: OnboardingScreenSchemaType
  ) => {
    try {
      const { session } = await handleSignInAnonymously({
        ...params,
        isNewUser: true,
      });
      if (params.likeToReceiveDailyReminders === "YES" && session) {
        registerForPushNotificationsAsync().then((token) => {
          updateNotificationSetting({
            state: token ?? null,
            userId: session?.user?.id,
            key: "notification_token",
          });
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handlePurchasePackage = async (params: OnboardingScreenSchemaType) => {
    try {
      if (process.env.EXPO_PUBLIC_NODE_ENV === "DEV") {
        authenticateSignInAnonymously(params);
        return;
      }
      await purchasePackage();
      authenticateSignInAnonymously(params);
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
    isPending,
    isLoading,
    selectedPackage,
    availableIntroPrice,
    handlePurchasePackage,
  };
};
