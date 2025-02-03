import { useAuth } from "@services";

import { TouchableOpacityBox } from "../Box/Box";
import { Text } from "../Text/Text";

export const LogOutButton = () => {
  const { signOut } = useAuth();

  return (
    <TouchableOpacityBox onPress={signOut} disabled={false}>
      <Text color={"primary"} weight="medium">
        Sair
      </Text>
    </TouchableOpacityBox>
  );
};
