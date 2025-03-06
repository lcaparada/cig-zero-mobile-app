import { useNavigation } from "@react-navigation/native";

import { useTimeSinceLastSmokingRecord } from "@hooks";

export const useHomeHeader = () => {
  const navigation = useNavigation();
  const { timeSinceLastSmokingRecord } = useTimeSinceLastSmokingRecord();
  return { navigation, timeSinceLastSmokingRecord };
};
