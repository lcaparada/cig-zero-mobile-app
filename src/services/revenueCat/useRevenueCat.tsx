import { Platform } from "react-native";

import {
  INTRO_ELIGIBILITY_STATUS,
  PurchasesPromotionalOffer,
} from "react-native-purchases";
import { create } from "zustand";

import { revenueCatService } from "./revenueCatService";
import {
  RevenueCatOfferingMetadata,
  RevenueCatService,
} from "./revenueCatTypes";

export const useRevenueCatStore = create<RevenueCatService>((set, get) => ({
  packages: [],
  metadata: {},
  isLoading: true,
  customerInfo: null,
  selectedPackage: "",
  paywallVisible: false,
  availableIntroPrice: null,
  currentSubscriptionIsVisibled: false,

  setSelectedPackage: (spkg) => {
    set({ selectedPackage: spkg });
  },

  setPaywallVisible: (bool) => {
    set({ paywallVisible: bool });
  },

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
    } catch (error: any) {
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

  checkIfUserIsPremium: async () => {
    const { getCustomerInfo, setPaywallVisible } = get();
    try {
      const customerInfo = await getCustomerInfo();
      if (!customerInfo.activeSubscriptions.length) {
        setPaywallVisible(true);
      }
    } catch (error) {
      console.log(error);
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

      const firstAvailablePackage = availablePackages[0];

      if (!firstAvailablePackage) return;

      let isFirstAvailablePackageEligible = false;
      let eligibleProductIds: string[] = [];

      if (Platform.OS === "ios") {
        const productIdentifiers = availablePackages.map(
          (pkg) => pkg.product.identifier
        );

        const productsWithEligibility =
          await revenueCatService.checkTrialOrIntroductoryPriceEligibility(
            productIdentifiers
          );

        eligibleProductIds = Object.entries(productsWithEligibility)
          .filter(
            ([_, eligibility]) =>
              eligibility.status ===
              INTRO_ELIGIBILITY_STATUS.INTRO_ELIGIBILITY_STATUS_ELIGIBLE
          )
          .map(([productId]) => productId);

        isFirstAvailablePackageEligible = eligibleProductIds.includes(
          firstAvailablePackage.identifier
        );
      } else {
        eligibleProductIds = availablePackages
          .filter((pkg) => pkg.product.defaultOption?.freePhase)
          .map((pkg) => pkg.identifier);

        isFirstAvailablePackageEligible = eligibleProductIds.includes(
          firstAvailablePackage.identifier
        );
      }

      set({
        availableIntroPrice: isFirstAvailablePackageEligible
          ? firstAvailablePackage?.product?.introPrice
          : null,
        selectedPackage: firstAvailablePackage.identifier,
        metadata: currentOffering.metadata as RevenueCatOfferingMetadata,
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

  hideCurrentSubscriptionBottomSheet: () => {
    set({ currentSubscriptionIsVisibled: false });
  },
}));

export function useRevenueCatService() {
  const packages = useRevenueCatStore((state) => state.packages);
  const metadata = useRevenueCatStore((state) => state.metadata);
  const isLoading = useRevenueCatStore((state) => state.isLoading);
  const loadProducts = useRevenueCatStore((state) => state.loadProducts);
  const customerInfo = useRevenueCatStore((state) => state.customerInfo);
  const paywallVisible = useRevenueCatStore((state) => state.paywallVisible);
  const selectedPackage = useRevenueCatStore((state) => state.selectedPackage);
  const purchasePackage = useRevenueCatStore((state) => state.purchasePackage);
  const setPaywallVisible = useRevenueCatStore(
    (state) => state.setPaywallVisible
  );

  const setSelectedPackage = useRevenueCatStore(
    (state) => state.setSelectedPackage
  );
  const restorePurchases = useRevenueCatStore(
    (state) => state.restorePurchases
  );
  const availableIntroPrice = useRevenueCatStore(
    (state) => state.availableIntroPrice
  );
  const checkIfUserIsPremium = useRevenueCatStore(
    (state) => state.checkIfUserIsPremium
  );
  const currentSubscriptionIsVisibled = useRevenueCatStore(
    (state) => state.currentSubscriptionIsVisibled
  );

  return {
    metadata,
    packages,
    isLoading,
    customerInfo,
    loadProducts,
    paywallVisible,
    purchasePackage,
    selectedPackage,
    restorePurchases,
    setPaywallVisible,
    setSelectedPackage,
    availableIntroPrice,
    checkIfUserIsPremium,
    currentSubscriptionIsVisibled,
  };
}
