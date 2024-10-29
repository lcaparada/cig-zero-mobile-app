import { Avatar, Box, Text } from "@components";

import { useAuth } from "@services";

export const AdjusmentsHeader = () => {
  const { session } = useAuth();
  return (
    <Box alignItems={"center"} rowGap={"s12"}>
      <Avatar size={120} name="Lucas" borderWidth={4} textSize="display2XL" />
      <Box alignItems={"center"}>
        <Text weight="semiBold" preset="paragraphsLarge">
          {session?.user?.user_metadata?.name}
        </Text>
        <Text weight="medium" color={"backgroundSecondConstrast"}>
          acessado anonimamente
        </Text>
      </Box>
    </Box>
  );
};
