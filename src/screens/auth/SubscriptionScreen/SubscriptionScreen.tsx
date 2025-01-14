import { Box, Text, Screen, Reviews } from "@components";
import { AuthScreenProps } from "@routes";

import { getBenefits } from "@constraints";

import { BenefitItem, TrialText } from "./components";
import { PackageItem } from "./components/PackageItem";
import { useSubscriptionsScreen } from "./useSubscriptionsScreen";

export const SubscriptionScreen = ({
  route,
}: AuthScreenProps<"SubscriptionScreen">) => {
  const {
    packages,
    metadata,
    isLoading,
    isPending,
    selectedPackage,
    handlePurchasePackage,
  } = useSubscriptionsScreen();
  const selectedPackageData = packages.find(
    (pkg) => pkg.identifier === selectedPackage
  );

  return (
    <Screen
      overflowVisible
      scrollable
      button={{
        text: selectedPackageData?.product.introPrice
          ? "Iniciar teste gratuito"
          : "Continuar",
        action: () => handlePurchasePackage(route.params),
        disabled: isPending || isLoading,
        loading: isPending || isLoading,
      }}
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
        <Box rowGap={"s16"}>
          {packages.map(({ product, identifier }) => (
            <PackageItem
              key={product.identifier}
              {...product}
              metadata={metadata[identifier]}
              packageIdentifier={identifier}
            />
          ))}
        </Box>
        <TrialText selectedPackageData={selectedPackageData} />
      </Box>
    </Screen>
  );
};
