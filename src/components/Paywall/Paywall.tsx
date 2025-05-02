import { Modal } from "react-native";

import { getBenefits } from "@constraints";

import { BenefitItem } from "../BenefitItem/BenefitItem";
import { Box } from "../Box/Box";
import { PackageItem } from "../PackageItem/PackageItem";
import { Reviews } from "../Reviews/Reviews";

import { usePaywall } from "./usePaywall";
import { Screen } from "../Screen/Screen";
import { TrialText } from "../TrialText/TrialText";

export const Paywall = () => {
  const {
    packages,
    metadata,
    isLoading,
    selectedPackage,
    paywallVisible,
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
          action: handlePurchasePackage,
          disabled: isLoading,
          loading: isLoading,
        }}
        screenTitle="CigZero Plus"
        titleWeight="bold"
        titleSize="display"
        titleColor="primary"
      >
        <Box rowGap={"s26"} paddingVertical={"s18"}>
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
