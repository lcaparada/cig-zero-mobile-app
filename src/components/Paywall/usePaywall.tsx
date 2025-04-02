import { useEffect } from "react";

import { useAppSafeAreaContext } from "@hooks";

import { useRevenueCatService, useToastService } from "@services";

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

  const { bottom } = useAppSafeAreaContext();

  const handlePurchasePackage = async () => {
    try {
      await purchasePackage();
      setPaywallVisible(false);
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

  function closePaywall() {
    setPaywallVisible(false);
  }

  useEffect(() => {
    loadProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    bottom,
    packages,
    metadata,
    isLoading,
    paywallVisible,
    closePaywall,
    handlePurchasePackage,
  };
};
