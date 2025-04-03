import * as Haptics from "expo-haptics";

import { ThemeColors } from "@theme";

import { useAuth } from "@services";

import { TouchableOpacityBox } from "../Box/Box";
import { Text } from "../Text/Text";

interface LogOutButtonProps {
  color?: ThemeColors;
}

export const LogOutButton = ({ color = "primary" }: LogOutButtonProps) => {
  const { signOut } = useAuth();

  return (
    <TouchableOpacityBox
      onPress={() => {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
        signOut();
      }}
      disabled={false}
    >
      <Text color={color} weight="medium">
        Sair
      </Text>
    </TouchableOpacityBox>
  );
};
