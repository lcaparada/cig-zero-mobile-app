import { Box, BoxProps, Icon, IconName, Text } from "@components";

interface InfoRowProps {
  icon: IconName;
  text: string;
  value: string | number;
}

export const InfoRow = ({ icon, text, value }: InfoRowProps) => (
  <Box
    {...$card}
    {...shadow}
    flexDirection="row"
    alignItems="center"
    justifyContent="space-between"
  >
    <Box flexDirection="row" flex={1} alignItems="center" columnGap="s8">
      <Icon name={icon} strokeWidth={2} />
      <Text weight="medium" color="primary" preset="paragraphsBig">
        {text}
      </Text>
    </Box>
    <Text weight="bold" color="primary">
      {value}
    </Text>
  </Box>
);

const $card: BoxProps = {
  mt: "s18",
  backgroundColor: "background",
  borderRadius: "s8",
  paddingHorizontal: "s12",
  borderWidth: 1,
  borderColor: "primary",
  paddingVertical: "s10",
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
