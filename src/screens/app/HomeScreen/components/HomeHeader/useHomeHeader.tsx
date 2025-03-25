import { useNavigation } from "@react-navigation/native";

import { useTimeSinceLastSmokingRecord } from "@hooks";

import { useAuth, useRevenueCatService } from "@services";

export const useHomeHeader = () => {
  const { session } = useAuth();

  const navigation = useNavigation();

  const { isUserPremium, setPaywallVisible } = useRevenueCatService();

  const { timeSinceLastSmokingRecord } = useTimeSinceLastSmokingRecord(
    session?.user.id ?? ""
  );

  return {
    navigation,
    isUserPremium,
    setPaywallVisible,
    timeSinceLastSmokingRecord,
  };
};
