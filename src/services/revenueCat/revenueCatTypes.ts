import {
  CustomerInfo,
  PurchasesIntroPrice,
  PurchasesPackage,
} from "react-native-purchases";

export type RevenueCatOfferingMetadataData = { discount?: string };

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
  currentSubscriptionIsVisibled: boolean;
  availableIntroPrice: null | PurchasesIntroPrice;
  loadProducts: () => Promise<void>;
  purchasePackage: () => Promise<void>;
  restorePurchases: () => Promise<void>;
  getCustomerInfo: () => Promise<CustomerInfo>;
  hideCurrentSubscriptionBottomSheet: () => void;
};
