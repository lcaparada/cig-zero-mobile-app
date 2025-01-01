import React from "react";
import { Platform } from "react-native";

import { PurchasesPackage } from "react-native-purchases";

import { Text } from "@components";

import { extractUnitFrequency } from "@helpers";

interface ITrialText {
  selectedPackageData: PurchasesPackage | undefined;
}

export const TrialText = ({ selectedPackageData }: ITrialText) => {
  if (!selectedPackageData?.product) {
    return null;
  }

  const isIOS = Platform.OS === "ios";
  const { introPrice, defaultOption, pricePerMonthString } =
    selectedPackageData.product;

  const trialPeriodText =
    isIOS && introPrice
      ? `${extractUnitFrequency(introPrice.period)} grátis`
      : !isIOS && defaultOption?.freePhase
        ? `${extractUnitFrequency(defaultOption?.freePhase.billingPeriod.iso8601)} grátis`
        : null;

  if (!trialPeriodText) {
    return null;
  }

  return (
    <Text
      weight="medium"
      preset="paragraphs"
      textAlign="center"
      color="backgroundSecondConstrast"
    >
      Experimente{" "}
      <Text
        weight="bold"
        preset="paragraphs"
        textAlign="center"
        color="primary"
      >
        {trialPeriodText}
      </Text>{" "}
      e depois pague {pricePerMonthString} mensalmente. Cancele a qualquer
      momento.
    </Text>
  );
};
