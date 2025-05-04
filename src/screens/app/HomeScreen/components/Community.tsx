import { useNavigation } from "@react-navigation/native";
import * as Haptics from "expo-haptics";

import { Box, BoxProps, Icon, Text, TouchableOpacityBox } from "@components";
import { shadow } from "@theme";

import { useGetUnreadMessagesCount } from "@domain";
import { useAuth, UserMetadata } from "@services";
import { TourGuideZone, useTourGuideController } from "rn-tourguide";

interface BadgetProps {
  value: number;
}

export const Community = () => {
  const { session } = useAuth();
  const { stop } = useTourGuideController();

  const userMetaData = session?.user.user_metadata as UserMetadata;

  const navigation = useNavigation();

  const { data } = useGetUnreadMessagesCount(userMetaData.lastTimeOpenedChat);

  return (
    <TourGuideZone
      text="Esta seção é a comunidade – um espaço para compartilhar experiências, trocar aprendizados e se apoiar na jornada para parar de fumar."
      zone={5}
    >
      <Box paddingHorizontal={"s25"} paddingVertical={"s30"}>
        <TouchableOpacityBox
          {...$touchableBoxWrapper}
          {...shadow}
          onPress={() => {
            Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
            stop();
            navigation.navigate("CommunityScreen");
          }}
        >
          {data && data.unread_messages_count > 0 && (
            <Badget value={data.unread_messages_count} />
          )}
          <Icon name="community" size="s32" color="buttonConstrast" />
          <Box flex={1}>
            <Text
              preset="paragraphsXL"
              weight="semiBold"
              color={"buttonConstrast"}
            >
              Comunidade
            </Text>
            <Text
              preset="paragraphsBig"
              weight="medium"
              textAlign={"left"}
              color={"buttonConstrast"}
            >
              Converse e se conecte com outras pessoas.
            </Text>
          </Box>
        </TouchableOpacityBox>
      </Box>
    </TourGuideZone>
  );
};

const Badget = ({ value }: BadgetProps) => {
  return (
    <Box {...$badgetBox}>
      <Text color={"neutralLighest"} weight="medium">
        {value > 99 ? "+99" : value}
      </Text>
    </Box>
  );
};

const $badgetBox: BoxProps = {
  right: 15,
  top: -15,
  width: 36,
  height: 36,
  position: "absolute",
  alignItems: "center",
  borderRadius: "full",
  justifyContent: "center",
  backgroundColor: "deleteButton",
};

const $touchableBoxWrapper: BoxProps = {
  columnGap: "s8",
  alignItems: "center",
  borderRadius: "s16",
  flexDirection: "row",
  paddingVertical: "s18",
  backgroundColor: "primary",
  paddingHorizontal: "s20",
};
