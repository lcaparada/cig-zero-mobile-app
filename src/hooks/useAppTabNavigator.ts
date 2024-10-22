import { useNavigation } from "@react-navigation/native";

import { AppTabBottomTabParamList } from "@routes";

export const useAppTabNavigator = () => {
  const navigation = useNavigation();

  const navigate = (screen: keyof AppTabBottomTabParamList) => {
    navigation.navigate("AppTabNavigator", { screen });
  };

  return {
    navigate,
  };
};
