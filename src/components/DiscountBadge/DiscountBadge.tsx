import { PurchasesStoreProductDiscount } from "react-native-purchases";

import { RevenueCatOfferingMetadataData } from "@services";
import { Box } from "src/components/Box/Box";
import { Text } from "src/components/Text/Text";

type DiscountBadgeProps = {
  price: number;
  discount?: PurchasesStoreProductDiscount;
  metadata?: RevenueCatOfferingMetadataData;
};

export const DiscountBadge = ({
  discount,
  metadata,
  price,
}: DiscountBadgeProps) => {
  const discountValue = discount
    ? Math.round((discount.price / price) * 100)
    : metadata?.discount;

  return (
    <Box
      top={-14}
      right={16}
      borderRadius="full"
      position="absolute"
      paddingVertical="s4"
      paddingHorizontal="s8"
      backgroundColor="primary"
    >
      <Text preset="notes" weight="semiBold" color="neutralLighest">
        {`${discountValue}% OFF`}
      </Text>
    </Box>
  );
};
