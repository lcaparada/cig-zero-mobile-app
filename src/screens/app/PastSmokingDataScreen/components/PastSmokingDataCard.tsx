import { Box, Icon, IconName, Text } from "@components";

interface PastSmokingDataCardProps {
  text: string;
  iconName: IconName;
  rightText: string;
}

export const PastSmokingDataCard = ({
  text,
  iconName,
  rightText,
}: PastSmokingDataCardProps) => {
  return (
    <Box
      flexDirection={"row"}
      alignItems={"center"}
      justifyContent={"space-between"}
    >
      <Box
        flexDirection={"row"}
        flex={1}
        columnGap={"s8"}
        alignItems={"center"}
      >
        <Icon name={iconName} />
        <Text
          color={"backgroundConstrast"}
          preset="paragraphsXL"
          weight="medium"
        >
          {text}
        </Text>
      </Box>
      <Text color={"backgroundConstrast"} weight="bold">
        {rightText}
      </Text>
    </Box>
  );
};
