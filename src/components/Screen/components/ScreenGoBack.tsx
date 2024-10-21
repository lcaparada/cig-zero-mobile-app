import { useNavigation } from "@react-navigation/native";

import { Icon } from "src/components/Icon/Icon";

interface ScreenGoBackProps {
  action?: () => void;
}

export const ScreenGoBack = ({ action }: ScreenGoBackProps) => {
  const navigation = useNavigation();

  return (
    <Icon
      name="arrowLeft"
      size="s22"
      color="backgroundConstrast"
      strokeWidth={2}
      onPress={() => (!!action ? action() : navigation.goBack())}
    />
  );
};
