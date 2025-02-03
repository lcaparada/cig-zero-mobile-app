import { useNavigation } from "@react-navigation/native";

import { Box, BoxProps, Icon, LogOutButton } from "@components";
import { useAppSafeAreaContext } from "@hooks";

export const FeaturesScreenHeader = () => {
  const { top } = useAppSafeAreaContext();
  const navigation = useNavigation();

  return (
    <Box {...$boxWrapper} top={top}>
      <Icon
        name="arrowLeft"
        size="s22"
        color="backgroundConstrast"
        strokeWidth={2}
        onPress={navigation.goBack}
      />
      <LogOutButton />
    </Box>
  );
};

const $boxWrapper: BoxProps = {
  position: "absolute",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  right: 24,
  left: 24,
  zIndex: 2,
};
