import { useEffect } from "react";

import { useRevenueCatService } from "@services";

export const useSubscriptionsScreen = () => {
  const { packages, loadProducts, selectedPackage } = useRevenueCatService();

  useEffect(() => {
    loadProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { packages, selectedPackage };
};
