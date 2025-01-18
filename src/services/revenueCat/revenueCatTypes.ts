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
  isLoading: boolean;
  selectedPackage: string;
  packages: PurchasesPackage[];
  metadata: RevenueCatOfferingMetadata;
  customerInfo: CustomerInfo | null;
  currentSubscriptionIsVisibled: boolean;
  availableIntroPrice: null | PurchasesIntroPrice;
  loadProducts: () => Promise<void>;
  getCustomerInfo: () => Promise<CustomerInfo>;
  purchasePackage: () => Promise<void>;
  restorePurchases: () => Promise<void>;
  setSelectedPackage: (selectedPackage: string) => void;
  checkIfUserIsPremium: () => Promise<void>;
  hideCurrentSubscriptionBottomSheet: () => void;
};
