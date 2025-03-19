import { SvgUri } from "react-native-svg";

import { Box, BoxProps, Icon, Text } from "@components";

import { Achievement } from "@domain";

export const AchievementCard = ({
  title,
  description,
  icon_url,
  unlocked,
}: Achievement) => {
  return (
    <Box {...boxWrapper} {...shadow}>
      <SvgUri uri={icon_url} />
      <Box mt={"s8"} paddingHorizontal={"s24"}>
        <Text
          textAlign={"center"}
          weight="bold"
          color={"primary"}
          preset="paragraphsBig"
        >
          {title}
        </Text>
        <Text
          textAlign={"center"}
          weight="medium"
          color={"primary"}
          preset="notes"
        >
          {description}
        </Text>
      </Box>

      {unlocked && (
        <Box position={"absolute"} right={16} top={16}>
          <Icon name="checkAchievement" size="s24" />
        </Box>
      )}
    </Box>
  );
};

const shadow: BoxProps = {
  shadowColor: "primary",
  shadowOffset: {
    width: 0,
    height: 5,
  },
  shadowOpacity: 1,
  shadowRadius: 0,

  elevation: 5,
};

const boxWrapper: BoxProps = {
  width: 164,
  height: 164,
  borderWidth: 1,
  borderRadius: "s12",
  borderColor: "primary",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "background",
};
