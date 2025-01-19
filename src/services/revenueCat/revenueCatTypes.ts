import {
  CustomerInfo,
  PurchasesIntroPrice,
  PurchasesPackage,
} from "react-native-purchases";

export type RevenueCatOfferingMetadataData = { discount?: string };
export type RevenueCatOfferingMetadata = Record<
  string,
  RevenueCatOfferingMetadataData
>;

export type PurchasePackageParams = {
  email: string;
  userId: string;
};

export type SetAttributesParams = {
  email: string;
  userId: string;
};

export type RevenueCatService = {
  packages: PurchasesPackage[];
  metadata: RevenueCatOfferingMetadata;
  isLoading: boolean;
  customerInfo: CustomerInfo | null;
  paywallVisible: boolean;
  selectedPackage: string;
  availableIntroPrice: null | PurchasesIntroPrice;
  currentSubscriptionIsVisibled: boolean;
  loadProducts: () => Promise<void>;
  getCustomerInfo: () => Promise<CustomerInfo>;
  purchasePackage: () => Promise<void>;
  restorePurchases: () => Promise<void>;
  setPaywallVisible: (bool: boolean) => void;
  setSelectedPackage: (selectedPackage: string) => void;
  checkIfUserIsPremium: () => Promise<void>;
  hideCurrentSubscriptionBottomSheet: () => void;
};
