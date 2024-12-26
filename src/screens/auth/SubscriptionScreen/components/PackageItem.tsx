import { PurchasesStoreProduct } from "react-native-purchases";

import { Checkbox } from "@components";

import { useRevenueCatService } from "@services";
import { Box, TouchableOpacityBox } from "src/components/Box/Box";
import { Text } from "src/components/Text/Text";

type PackageItemProps = PurchasesStoreProduct & {
  packageIdentifier: string;
};

export const PackageItem = ({
  title,
  discounts,
  priceString,
  pricePerWeekString,
  packageIdentifier,
}: PackageItemProps) => {
  const { selectedPackage, isLoading } = useRevenueCatService();

  const isSelected = packageIdentifier === selectedPackage;
  const discount = discounts?.[0];

  return (
    <TouchableOpacityBox
      padding="s16"
      borderWidth={2}
      columnGap="s12"
      borderRadius="s16"
      flexDirection="row"
      alignItems="center"
      disabled={isLoading}
      backgroundColor={"background"}
      borderColor={isSelected ? "primary" : "backgroundSecondConstrast"}
    >
      <Box flex={1} flexDirection="row" alignItems="center" columnGap="s12">
        <Checkbox isSelected={isSelected} />
        <Box>
          <Text weight="medium" color="primary">
            {title}
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
    </TouchableOpacityBox>
  );
};
