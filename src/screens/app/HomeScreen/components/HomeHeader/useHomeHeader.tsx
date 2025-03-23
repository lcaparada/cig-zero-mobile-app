import { useState } from "react";

import { useNavigation } from "@react-navigation/native";

import { useTimeSinceLastSmokingRecord } from "@hooks";

import { useAuth, useRevenueCatService } from "@services";

export const useHomeHeader = () => {
  const { session } = useAuth();

  const navigation = useNavigation();

  const { isUserPremium } = useRevenueCatService();

  const [isCounterPopupVisible, setIsCounterPopupVisibility] = useState(false);

  const { timeSinceLastSmokingRecord } = useTimeSinceLastSmokingRecord(
    session?.user.id ?? ""
  );

  return {
    navigation,
    isUserPremium,
    isCounterPopupVisible,
    timeSinceLastSmokingRecord,
    setIsCounterPopupVisibility,
  };
};
