import { Box, Icon, Screen, ScreenHeader, Text } from "@components";
import { shadow } from "@theme";

export const HomeScreen = () => {
  return (
    <Screen
      hasPaddingTop={false}
      insets={{ left: "s0", right: "s0", top: "s24" }}
      scrollable
    >
      <Box
        backgroundColor={"primary"}
        paddingTop={"s28"}
        paddingHorizontal={"s24"}
        height={244}
        {...shadow}
      >
        <ScreenHeader
          title="Resumo"
          description="Acompanhe o progresso"
          titleAndDescriptionColor="neutralLighest"
          rightComponent={
            <Icon
              name="settings"
              color="neutralLighest"
              strokeWidth={2}
              size="s24"
            />
          }
        />
        <Icon name="calendar"></Icon>
      </Box>
    </Screen>
  );
};
