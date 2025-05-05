import { Platform } from "react-native";

import * as Haptics from "expo-haptics";
import { PurchasesStoreProduct } from "react-native-purchases";

import {
  RevenueCatOfferingMetadataData,
  useRevenueCatService,
} from "@services";

import { Box, BoxProps, TouchableOpacityBox } from "../Box/Box";
import { Checkbox } from "../Checkbox/Checkbox";
import { DiscountBadge } from "../DiscountBadge/DiscountBadge";
import { Text } from "../Text/Text";

type PackageItemProps = PurchasesStoreProduct & {
  packageIdentifier: string;
  metadata: RevenueCatOfferingMetadataData;
};

export const PackageItem = ({
  title,
  price,
  discounts,
  metadata,
  priceString,
  pricePerWeekString,
  packageIdentifier,
}: PackageItemProps) => {
  const { selectedPackage, isLoading, setSelectedPackage } =
    useRevenueCatService();

  const isSelected = packageIdentifier === selectedPackage;
  const discount = discounts?.[0];

  const titleTranslation: Record<string, string> = {
    Monthly: "Mensal",
    $rc_monthly: "Mensal",
    $rc_annually: "Anual",
    $rc_annual: "Anual",
  };

  return (
    <TouchableOpacityBox
      {...$touchableWrapper}
      disabled={isLoading}
      onPress={() => {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);

        setSelectedPackage(packageIdentifier);
      }}
      borderColor={isSelected ? "primary" : "packageItemBorderColor"}
    >
      <Box flex={1} flexDirection="row" alignItems="center" columnGap="s12">
        <Checkbox isSelected={isSelected} />
        <Box>
          <Text weight="medium" color="primary">
            {titleTranslation[
              Platform.OS === "android" ? packageIdentifier : title
            ] ?? title}
          </Text>
        </Box>
      </Box>
      <Box alignItems="flex-end">
        <Text weight="semiBold" color="primary">
          {discount?.priceString ?? priceString}
        </Text>
        <Text
          preset="paragraphs"
          weight="medium"
          color="backgroundSecondConstrast"
        >
          {pricePerWeekString} por semana
        </Text>
      </Box>
      {(discount || metadata?.discount) && (
        <DiscountBadge price={price} discount={discount} metadata={metadata} />
      )}
    </TouchableOpacityBox>
  );
};

const $touchableWrapper: BoxProps = {
  padding: "s16",
  borderWidth: 2,
  columnGap: "s12",
  borderRadius: "s16",
  flexDirection: "row",
  alignItems: "center",
  backgroundColor: "background",
};
