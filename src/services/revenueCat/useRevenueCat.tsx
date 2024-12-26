import { PurchasesPromotionalOffer } from "react-native-purchases";
import { create } from "zustand";

import { revenueCatService } from "./revenueCatService";
import { PurchasePackageParams, RevenueCatService } from "./revenueCatTypes";

export const useRevenueCatStore = create<RevenueCatService>((set, get) => ({
  packages: [],
  metadata: {},
  isLoading: true,
  showAllPlans: true,
  customerInfo: null,
  selectedPackage: "",
  paywallIsVisibled: false,
  availableIntroPrice: null,
  currentSubscriptionIsVisibled: false,

  purchasePackage: async ({ email, userId }: PurchasePackageParams) => {
    const { packages, selectedPackage } = get();
    if (!selectedPackage) return;
    const selectedPackageData = packages.find(
      (pkg) => pkg.identifier === selectedPackage
    );
    if (!selectedPackageData) return;

    const discount = selectedPackageData.product.discounts?.[0];
    let promotionalOffer: PurchasesPromotionalOffer | undefined;

    set({ isLoading: true });

    if (discount) {
      try {
        promotionalOffer = await revenueCatService.getPromotionalOffer(
          selectedPackageData.product,
          discount
        );
      } catch (error) {
        console.error(error);
      }
    }

    try {
      await revenueCatService.setAttributes({ email, userId });
    } catch (error) {
      console.error(error);
    }

    try {
      await revenueCatService.purchasePackage(
        selectedPackageData,
        promotionalOffer
      );
    } catch (error) {
      throw error;
    } finally {
      set({ isLoading: false });
    }
  },

  getPackages: async () => {
    try {
      const offerings = await revenueCatService.getOfferings();
      const currentOffering = offerings.current;

      if (!currentOffering) return;
    } catch (error) {
      console.error(error);
    }
  },

  getCustomerInfo: async () => {
    try {
      const customerInfo = await revenueCatService.getCustomerInfo();
      set({ customerInfo });
      return customerInfo;
    } catch (error) {
      throw error;
    }
  },

  restorePurchases: async () => {
    set({ isLoading: true });
    try {
      const customerInfo = await revenueCatService.restorePurchases();
      set({ customerInfo });
    } catch (error) {
      throw error;
    } finally {
      set({ isLoading: false });
    }
  },

  showCurrentSubscriptionBottomSheet: () => {
    set({ isLoading: false });
    set({ currentSubscriptionIsVisibled: true });
  },

  hideCurrentSubscriptionBottomSheet: () => {
    set({ currentSubscriptionIsVisibled: false });
  },

  selectPackage: (identifier: string) => {
    const { packages } = get();
    const pkg = packages.find((pkg) => pkg.identifier === identifier);
    if (pkg) {
      set({ availableIntroPrice: pkg.product.introPrice });
    }
    set({ selectedPackage: identifier });
  },
}));

export function useRevenueCatService() {
  const packages = useRevenueCatStore((state) => state.packages);
  const metadata = useRevenueCatStore((state) => state.metadata);
  const isLoading = useRevenueCatStore((state) => state.isLoading);
  const customerInfo = useRevenueCatStore((state) => state.customerInfo);
  const selectPackage = useRevenueCatStore((state) => state.selectPackage);
  const selectedPackage = useRevenueCatStore((state) => state.selectedPackage);
  const purchasePackage = useRevenueCatStore((state) => state.purchasePackage);

  const restorePurchases = useRevenueCatStore(
    (state) => state.restorePurchases
  );
  const availableIntroPrice = useRevenueCatStore(
    (state) => state.availableIntroPrice
  );
  const currentSubscriptionIsVisibled = useRevenueCatStore(
    (state) => state.currentSubscriptionIsVisibled
  );
  const hideCurrentSubscriptionBottomSheet = useRevenueCatStore(
    (state) => state.hideCurrentSubscriptionBottomSheet
  );

  return {
    packages,
    metadata,
    isLoading,
    customerInfo,
    selectPackage,
    purchasePackage,
    selectedPackage,
    restorePurchases,
    availableIntroPrice,
    currentSubscriptionIsVisibled,
    hideCurrentSubscriptionBottomSheet,
  };
}
