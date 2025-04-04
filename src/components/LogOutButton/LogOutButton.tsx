import * as Haptics from "expo-haptics";

import { ThemeColors } from "@theme";

import { useAuth } from "@services";

import { TouchableOpacityBox } from "../Box/Box";
import { Text } from "../Text/Text";

interface LogOutButtonProps {
  color?: ThemeColors;
  disabled?: boolean;
}

export const LogOutButton = ({
  color = "primary",
  disabled = false,
}: LogOutButtonProps) => {
  const { signOut } = useAuth();

  return (
    <TouchableOpacityBox
      onPress={() => {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
        signOut();
      }}
      disabled={disabled}
    >
      <Text color={color} weight="medium">
        Sair
      </Text>
    </TouchableOpacityBox>
  );
};
