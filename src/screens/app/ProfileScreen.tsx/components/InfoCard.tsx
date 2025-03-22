import { Box, BoxProps, Icon, IconName, Text } from "@components";

interface InfoCardProps {
  icon: IconName;
  title: string;
  children: React.ReactNode;
}

export const InfoCard = ({ icon, title, children }: InfoCardProps) => (
  <Box {...$card} {...shadow} rowGap="s12">
    <Box flexDirection="row" alignItems="center" columnGap="s8">
      <Icon name={icon} strokeWidth={2} />
      <Text weight="medium" color="primary" preset="paragraphsBig">
        {title}
      </Text>
    </Box>
    <Box
      flexDirection="row"
      alignItems="center"
      columnGap="s12"
      justifyContent="center"
    >
      {children}
    </Box>
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
