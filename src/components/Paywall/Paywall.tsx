import { Modal } from "react-native";

import { getBenefits } from "@constraints";

import { BenefitItem } from "../BenefitItem/BenefitItem";
import { Box } from "../Box/Box";
import { PackageItem } from "../PackageItem/PackageItem";
import { Reviews } from "../Reviews/Reviews";
import { Screen } from "../Screen/Screen";
import { Text } from "../Text/Text";
import { TrialText } from "../TrialText/TrialText";

import { usePaywall } from "./usePaywall";

export const Paywall = () => {
  const {
    packages,
    metadata,
    isLoading,
    paywallVisible,
    selectedPackage,
    handlePurchasePackage,
  } = usePaywall();

  const selectedPackageData = packages.find(
    (pkg) => pkg.identifier === selectedPackage
  );

  return (
    <Modal animationType="slide" visible={paywallVisible}>
      <Screen
        overflowVisible
        scrollable
        button={{
          text: selectedPackageData?.product.introPrice
            ? "Iniciar teste gratuito"
            : "Continuar",
          action: () => handlePurchasePackage(),
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
    </Modal>
  );
};
