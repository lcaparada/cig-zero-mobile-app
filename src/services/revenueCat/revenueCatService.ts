import RevenueCat, {
  PurchasesPackage,
  PurchasesPromotionalOffer,
  PurchasesStoreProduct,
  PurchasesStoreProductDiscount,
} from "react-native-purchases";

const getOfferings = async () => {
  try {
    const offerings = await RevenueCat.getOfferings();
    return offerings;
  } catch (error) {
    throw error;
  }
};

const restorePurchases = async () => {
  try {
    const customerInfo = await RevenueCat.restorePurchases();
    return customerInfo;
  } catch (error) {
    throw error;
  }
};

const getPromotionalOffer = async (
  product: PurchasesStoreProduct,
  discount: PurchasesStoreProductDiscount
) => {
  try {
    const promotionalOffer = await RevenueCat.getPromotionalOffer(
      product,
      discount
    );
    return promotionalOffer;
  } catch (error) {
    throw error;
  }
};

const checkTrialOrIntroductoryPriceEligibility = async (
  productIdentifiers: string[]
) => {
  try {
    const result =
      await RevenueCat.checkTrialOrIntroductoryPriceEligibility(
        productIdentifiers
      );
    return result;
  } catch (error) {
    throw error;
  }
};

const purchasePackage = async (
  pkg: PurchasesPackage,
  discount?: PurchasesPromotionalOffer
) => {
  try {
    if (discount) {
      await RevenueCat.purchaseDiscountedPackage(pkg, discount);
    } else {
      await RevenueCat.purchasePackage(pkg);
    }
  } catch (error) {
    throw error;
  }
};

const getCustomerInfo = async () => {
  try {
    const result = await RevenueCat.getCustomerInfo();
    return result;
  } catch (error) {
    throw error;
  }
};

export const revenueCatService = {
  getOfferings,
  purchasePackage,
  getCustomerInfo,
  restorePurchases,
  getPromotionalOffer,
  checkTrialOrIntroductoryPriceEligibility,
};
