import { useNavigation } from "@react-navigation/native";

import { useTimeSinceLastSmokingRecord } from "@hooks";

import { useAuth } from "@services";

export const useHomeHeader = () => {
  const { session } = useAuth();

  const navigation = useNavigation();

  const { timeSinceLastSmokingRecord } = useTimeSinceLastSmokingRecord(
    session?.user.id ?? ""
  );
  return { navigation, timeSinceLastSmokingRecord };
};
