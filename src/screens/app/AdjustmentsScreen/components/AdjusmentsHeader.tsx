import { Avatar, Box, Text } from "@components";

export const AdjusmentsHeader = () => {
  return (
    <Box alignItems={"center"} rowGap={"s12"}>
      <Avatar size={120} name="Lucas" borderWidth={4} textSize="display2XL" />
      <Box alignItems={"center"}>
        <Text weight="semiBold" preset="paragraphsLarge">
          Lucas Cavalcante
        </Text>
        <Text weight="medium" color={"backgroundSecondConstrast"}>
          acessado anonimamente
        </Text>
      </Box>
    </Box>
  );
};
