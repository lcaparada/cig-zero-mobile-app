import { Box, Text, Screen, Reviews } from "@components";

import { getBenefits } from "@constraints";

import { BenefitItem } from "./components";
import { PackageItem } from "./components/PackageItem";
import { useSubscriptionsScreen } from "./useSubscriptionsScreen";

export const SubscriptionScreen = () => {
  const { packages, selectedPackage } = useSubscriptionsScreen();
  const selectedPackageData = packages.find(
    (pkg) => pkg.identifier === selectedPackage
  );
  console.log(selectedPackageData);
  return (
    <Screen
      overflowVisible
      scrollable
      button={{ text: "Test", action: () => {} }}
    >
      <Box rowGap={"s26"} paddingVertical={"s18"}>
        <Box alignItems={"center"} justifyContent={"center"}>
          <Text color={"primary"} weight="bold" preset="display">
            CigZero Plus
          </Text>
        </Box>
        <Box rowGap={"s8"} overflow={"hidden"}>
          {getBenefits().map((item, index) => (
            <BenefitItem key={index} {...item} />
          ))}
        </Box>
        <Reviews />
        {packages.map(({ product, identifier }) => (
          <PackageItem
            key={product.identifier}
            {...product}
            packageIdentifier={identifier}
          />
        ))}
        {selectedPackageData?.product.introPrice && (
          <Text
            weight="medium"
            preset="paragraphs"
            textAlign={"center"}
            color="backgroundSecondConstrast"
          >
            Experimente 3 dias grátis e depois pague{" "}
            {selectedPackageData.product.pricePerMonthString} mensalmente.
            Cancele a qualquer momento
          </Text>
        )}
      </Box>
    </Screen>
  );
};
