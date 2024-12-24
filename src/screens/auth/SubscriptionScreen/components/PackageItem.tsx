import { Platform } from "react-native";

import { PACKAGE_TYPE, PurchasesStoreProduct } from "react-native-purchases";
import { CheckBox } from "src/components/CheckBox/CheckBox";

import { capitalizeFirstLetter } from "@helpers";
import {
  RevenueCatOfferingMetadataData,
  useRevenueCatService,
} from "@services";
import { Box, TouchableOpacityBox } from "src/components/Box/Box";
import { Text } from "src/components/Text/Text";

import { DiscountBadge } from "./DiscountBadge";
import { DiscountPrice } from "./DiscountPrice";

type PackageItemProps = PurchasesStoreProduct & {
  packageIdentifier: string;
  packageType: PACKAGE_TYPE;
  metadata: RevenueCatOfferingMetadataData;
};

export const PackageItem = ({
  title,
  price,
  metadata,
  discounts,
  priceString,
  packageType,
  currencyCode,
  packageIdentifier,
  pricePerMonthString,
}: PackageItemProps) => {
  const { selectPackage, selectedPackage, isLoading } = useRevenueCatService();

  const isSelected = packageIdentifier === selectedPackage;
  const isMonthlyPackage = packageType === PACKAGE_TYPE.MONTHLY;
  const discount = discounts?.[0];

  const handleSelectPackage = () => selectPackage(packageIdentifier);

  return (
    <TouchableOpacityBox
      padding="s16"
      borderWidth={2}
      columnGap="s12"
      borderRadius="s16"
      flexDirection="row"
      alignItems="center"
      disabled={isLoading}
      onPress={handleSelectPackage}
      backgroundColor={"background"}
      borderColor={isSelected ? "primary" : "backgroundSecondConstrast"}
    >
      <Box flex={1} flexDirection="row" alignItems="center" columnGap="s12">
        <CheckBox
          isSelected={isSelected}
          borderColor={isSelected ? "primary" : "packageItemBorderColor"}
        />
        <Box>
          <Text weight="medium" color="primary">
            {Platform.OS === "ios" ? title : capitalizeFirstLetter(packageType)}
          </Text>
          {!isMonthlyPackage && (
            <Text
              weight="medium"
              preset="paragraphs"
              color="backgroundSecondConstrast"
            >
              Equivalente a
            </Text>
          )}
        </Box>
      </Box>
      <Box alignItems="flex-end">
        <Text weight="semiBold" color="primary">
          {discount?.priceString ?? priceString}
        </Text>
        {!isMonthlyPackage && (
          <DiscountPrice
            discount={discount}
            currencyCode={currencyCode}
            pricePerMonthString={pricePerMonthString}
          />
        )}
      </Box>
      {(discount || metadata?.discount) && (
        <DiscountBadge price={price} discount={discount} metadata={metadata} />
      )}
    </TouchableOpacityBox>
  );
};
