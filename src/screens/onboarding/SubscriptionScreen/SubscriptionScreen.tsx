import {
  Box,
  Text,
  Screen,
  Reviews,
  TrialText,
  BenefitItem,
  PackageItem,
} from "@components";
import { OnboardingScreenProps } from "@routes";

import { getBenefits } from "@constraints";

import { useSubscriptionsScreen } from "./useSubscriptionsScreen";

export const SubscriptionScreen = ({
  route,
}: OnboardingScreenProps<"SubscriptionScreen">) => {
  const {
    packages,
    metadata,
    isLoading,
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
        disabled: isLoading,
        loading: isLoading,
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
