import {
  INTRO_ELIGIBILITY_STATUS,
  PurchasesPromotionalOffer,
} from "react-native-purchases";
import { create } from "zustand";

import { revenueCatService } from "./revenueCatService";
import {
  // RevenueCatOfferingMetadata,
  RevenueCatService,
} from "./revenueCatTypes";

export const useRevenueCatStore = create<RevenueCatService>((set, get) => ({
  packages: [],
  // metadata: {},
  isLoading: true,
  // showAllPlans: true,
  customerInfo: null,
  selectedPackage: "",
  // paywallIsVisibled: false,
  availableIntroPrice: null,
  currentSubscriptionIsVisibled: false,

  purchasePackage: async () => {
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

  loadProducts: async () => {
    set({ isLoading: true });
    try {
      const offerings = await revenueCatService.getOfferings();
      const currentOffering = offerings.current;

      if (!currentOffering) return;

      const availablePackages = currentOffering.availablePackages;
      if (!availablePackages.length) return;

      const productIdentifiers = availablePackages.map(
        (pkg) => pkg.product.identifier
      );
      const productsWithEligibility =
        await revenueCatService.checkTrialOrIntroductoryPriceEligibility(
          productIdentifiers
        );

      const eligibleProductIds = Object.entries(productsWithEligibility)
        .filter(
          ([_, eligibility]) =>
            eligibility.status ===
            INTRO_ELIGIBILITY_STATUS.INTRO_ELIGIBILITY_STATUS_ELIGIBLE
        )
        .map(([productId]) => productId);

      const firstAvailablePackage = availablePackages[0];

      if (!firstAvailablePackage) return;

      const { identifier, introPrice } = firstAvailablePackage.product;
      const isEligibleProduct = eligibleProductIds.includes(identifier);

      set({
        // showAllPlans: !isEligibleProduct,
        availableIntroPrice: isEligibleProduct ? introPrice : null,
        selectedPackage: firstAvailablePackage.identifier,
        // metadata: currentOffering.metadata as RevenueCatOfferingMetadata,
        // paywallIsVisibled: true,
        packages: availablePackages.map((pkg) => {
          const isPackageEligible = eligibleProductIds.includes(
            pkg.product.identifier
          );
          return isPackageEligible
            ? pkg
            : { ...pkg, product: { ...pkg.product, introPrice: null } };
        }),
      });
    } catch (error) {
      throw error;
    } finally {
      set({ isLoading: false });
    }
  },

  // showCurrentSubscriptionBottomSheet: () => {
  //   set({ isLoading: false });
  //   set({ currentSubscriptionIsVisibled: true });
  // },

  hideCurrentSubscriptionBottomSheet: () => {
    set({ currentSubscriptionIsVisibled: false });
  },

  // showPaywallOrCurrentSubscriptionBottomSheet: async () => {
  //   try {
  //     const {
  //       getCustomerInfo,
  //       showPaywall,
  //       showCurrentSubscriptionBottomSheet,
  //     } = get();
  //     const customerInfo = await getCustomerInfo();
  //     if (!customerInfo.activeSubscriptions.length) {
  //       await showPaywall();
  //     } else {
  //       showCurrentSubscriptionBottomSheet();
  //     }
  //   } catch (error: any) {
  //     throw error;
  //   }
  // },

  // hidePaywall: () => {
  //   set({ paywallIsVisibled: false });
  //   set({ selectedPackage: "" });
  //   set({ metadata: {} });
  //   set({ packages: [] });
  // },

  // selectPackage: (identifier: string) => {
  //   const { packages } = get();
  //   const pkg = packages.find((pkg) => pkg.identifier === identifier);
  //   if (pkg) {
  //     set({ availableIntroPrice: pkg.product.introPrice });
  //   }
  //   set({ selectedPackage: identifier });
  // },

  // setShowAllPlans: () => {
  //   set({ showAllPlans: true });
  // },
}));

export function useRevenueCatService() {
  const packages = useRevenueCatStore((state) => state.packages);
  // const metadata = useRevenueCatStore((state) => state.metadata);
  const isLoading = useRevenueCatStore((state) => state.isLoading);
  const loadProducts = useRevenueCatStore((state) => state.loadProducts);
  // const hidePaywall = useRevenueCatStore((state) => state.hidePaywall);
  // const showAllPlans = useRevenueCatStore((state) => state.showAllPlans);
  const customerInfo = useRevenueCatStore((state) => state.customerInfo);
  // const selectPackage = useRevenueCatStore((state) => state.selectPackage);
  const selectedPackage = useRevenueCatStore((state) => state.selectedPackage);
  const purchasePackage = useRevenueCatStore((state) => state.purchasePackage);
  // const setShowAllPlans = useRevenueCatStore((state) => state.setShowAllPlans);
  // const paywallIsVisibled = useRevenueCatStore(
  //   (state) => state.paywallIsVisibled
  // );
  // const checkIfUserIsPremium = useRevenueCatStore(
  //   (state) => state.checkIfUserIsPremium
  // );
  const restorePurchases = useRevenueCatStore(
    (state) => state.restorePurchases
  );
  const availableIntroPrice = useRevenueCatStore(
    (state) => state.availableIntroPrice
  );
  const currentSubscriptionIsVisibled = useRevenueCatStore(
    (state) => state.currentSubscriptionIsVisibled
  );
  // const hideCurrentSubscriptionBottomSheet = useRevenueCatStore(
  //   (state) => state.hideCurrentSubscriptionBottomSheet
  // );
  // const showPaywallOrCurrentSubscriptionBottomSheet = useRevenueCatStore(
  //   (state) => state.showPaywallOrCurrentSubscriptionBottomSheet
  // );

  return {
    packages,
    // metadata,
    isLoading,
    // showPaywall,
    // hidePaywall,
    // showAllPlans,
    customerInfo,
    loadProducts,
    // selectPackage,
    // setShowAllPlans,
    purchasePackage,
    selectedPackage,
    restorePurchases,
    // paywallIsVisibled,
    availableIntroPrice,
    // checkIfUserIsPremium,
    currentSubscriptionIsVisibled,
    // hideCurrentSubscriptionBottomSheet,
    // showPaywallOrCurrentSubscriptionBottomSheet,
  };
}
