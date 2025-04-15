import { Box } from "../Box/Box";
import { Text } from "../Text/Text";

export const OrDivider = () => {
  return (
    <Box
      mt={"s20"}
      columnGap={"s12"}
      flexDirection={"row"}
      alignItems={"center"}
    >
      <Box flex={1} height={1} backgroundColor={"backgroundSecondConstrast"} />
      <Text preset={"paragraphsBig"} color={"backgroundSecondConstrast"}>
        OU
      </Text>
      <Box flex={1} height={1} backgroundColor={"backgroundSecondConstrast"} />
    </Box>
  );
};
