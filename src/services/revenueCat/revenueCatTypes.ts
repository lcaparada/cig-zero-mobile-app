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
  customerInfo: CustomerInfo | null;
  metadata: RevenueCatOfferingMetadata;
  currentSubscriptionIsVisibled: boolean;
  availableIntroPrice: null | PurchasesIntroPrice;
  purchasePackage: (params: PurchasePackageParams) => Promise<void>;
  restorePurchases: () => Promise<void>;
  selectPackage: (identifier: string) => void;
  getCustomerInfo: () => Promise<CustomerInfo>;
  getPackages: () => Promise<void>;
  showCurrentSubscriptionBottomSheet: () => void;
  hideCurrentSubscriptionBottomSheet: () => void;
};
