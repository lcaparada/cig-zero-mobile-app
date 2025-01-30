import { Text, TouchableOpacityBox } from "@components";

import { useAuth } from "@services";

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
