import { Modal, ScrollView } from "react-native";

import { useAppTheme } from "@hooks";

import { getBenefits } from "@constraints";

import { BenefitItem } from "../BenefitItem/BenefitItem";
import { Box } from "../Box/Box";
import { Button } from "../Button/Button";
import { PackageItem } from "../PackageItem/PackageItem";
import { Reviews } from "../Reviews/Reviews";

import { PaywallHeader } from "./components";
import { usePaywall } from "./usePaywall";

export const Paywall = () => {
  const {
    bottom,
    packages,
    metadata,
    isLoading,
    closePaywall,
    paywallVisible,
    handlePurchasePackage,
  } = usePaywall();

  const { colors } = useAppTheme();

  return (
    <Modal animationType="slide" visible={paywallVisible}>
      <PaywallHeader closePaywall={closePaywall} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ backgroundColor: colors.background, marginTop: 4 }}
        contentContainerStyle={{
          rowGap: 26,
          paddingTop: 26,
          paddingBottom: 140,
          backgroundColor: colors.background,
        }}
      >
        <Box paddingHorizontal={"s24"} rowGap={"s8"} overflow={"hidden"}>
          {getBenefits().map((item, index) => (
            <BenefitItem key={index} {...item} />
          ))}
        </Box>
        <Box paddingHorizontal={"s24"}>
          <Reviews />
        </Box>
        <Box paddingHorizontal={"s24"} rowGap={"s16"}>
          {packages.map(({ product, identifier }) => (
            <PackageItem
              key={product.identifier}
              {...product}
              metadata={metadata[identifier]}
              packageIdentifier={identifier}
            />
          ))}
        </Box>
      </ScrollView>
      <Box
        position={"absolute"}
        bottom={bottom}
        width={"100%"}
        paddingHorizontal={"s24"}
      >
        <Button
          text="Continuar"
          isLoading={isLoading}
          disabled={isLoading}
          onPress={handlePurchasePackage}
        />
      </Box>
    </Modal>
  );
};
