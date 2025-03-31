import { useEffect, useState } from "react";

import { useAppSafeAreaContext } from "@hooks";

import { calculateTimeDifferenceFromNow } from "@helpers";
import {
  useAuth,
  useRevenueCatService,
  UserMetaData,
  useToastService,
} from "@services";

export const usePaywall = () => {
  const {
    packages,
    metadata,
    isLoading,
    loadProducts,
    paywallVisible,
    purchasePackage,
    setPaywallVisible,
  } = useRevenueCatService();

  const { showToast } = useToastService();

  const { session } = useAuth();

  const { bottom } = useAppSafeAreaContext();

  const userMetaData = session?.user.user_metadata as UserMetaData;

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
  });

  const handlePurchasePackage = async () => {
    try {
      await purchasePackage();
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

  function getTimeLeft() {
    const endDate = new Date(userMetaData.firstAppLaunch);
    setTimeLeft(calculateTimeDifferenceFromNow(endDate.toISOString(), true));
  }

  function closePaywall() {
    setPaywallVisible(false);
  }

  useEffect(() => {
    const interval = setInterval(() => {
      getTimeLeft();
    }, 1000);

    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    loadProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    bottom,
    packages,
    metadata,
    timeLeft,
    isLoading,
    paywallVisible,
    closePaywall,
    handlePurchasePackage,
  };
};
