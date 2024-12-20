import { useState } from "react";

import { useNavigation } from "@react-navigation/native";
import { usePostHog } from "posthog-react-native";

import { Box, BoxProps, Icon, Popup, Text } from "@components";

import { PostHogEventsName } from "@constraints";

export const ChatHeader = () => {
  const [infoModalVisible, setInfoModalVisible] = useState(false);
  const navigation = useNavigation();

  const posthog = usePostHog();

  return (
    <Box backgroundColor={"primary"} {...$shadow}>
      <Box
        mt={"s12"}
        mb={"s24"}
        paddingLeft={"s24"}
        paddingRight={"s24"}
        flexDirection={"row"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Box position={"absolute"} left={24}>
          <Icon
            size="s22"
            strokeWidth={2}
            name="arrowLeft"
            color="neutralLighest"
            onPress={() => navigation.goBack()}
          />
        </Box>
        <Text weight="semiBold" preset="titleSmall" color={"neutralLighest"}>
          Chat
        </Text>
        <Box position={"absolute"} right={24}>
          <Icon
            size="s22"
            strokeWidth={2}
            name="infoCircle"
            color="neutralLighest"
            onPress={() => {
              posthog.capture(
                PostHogEventsName.PRESS_TO_SHOW_INFO_MODAL_ON_CHAT
              );
              setInfoModalVisible(true);
            }}
          />
        </Box>
      </Box>
      {infoModalVisible && (
        <Popup
          visible={infoModalVisible}
          setVisible={setInfoModalVisible}
          title="Mensagens Temporárias: Retenção de 3 Dias"
          description="Para garantir a sua privacidade, as mensagens enviadas neste chat são mantidas por um período de apenas 3 dias. Após esse período, elas são automaticamente removidas e não poderão ser recuperadas."
        />
      )}
    </Box>
  );
};

const $shadow: BoxProps = {
  shadowColor: "buttonShadow",
  shadowOffset: {
    width: 0,
    height: 5,
  },
  shadowOpacity: 1,
  shadowRadius: 0,
  elevation: 5,
};
