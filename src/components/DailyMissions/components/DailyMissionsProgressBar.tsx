import { Box, BoxProps } from "src/components/Box/Box";
import { Icon } from "src/components/Icon/Icon";
import { Text } from "src/components/Text/Text";

export const DailyMissionsProgressBar = () => {
  return (
    <Box flexDirection={"row"} columnGap={"s8"}>
      <Box flex={1} flexDirection={"row"}>
        <Box {...$progressWrapper}>
          <Box width={"50%"} {...$progressInner} />
        </Box>
        <Box position={"absolute"} right={-5} top={2}>
          <Icon name="star" color="background" fill="primary" />
        </Box>
      </Box>
      <Text preset="paragraphs" weight="semiBold" color={"background"}>
        2/3
      </Text>
    </Box>
  );
};

const $progressWrapper: BoxProps = {
  mt: "s8",
  height: 8,
  flex: 1,
  borderWidth: 1.5,
  borderTopLeftRadius: "s16",
  borderBottomLeftRadius: "s16",
  borderColor: "background",
  backgroundColor: "primary",
};

const $progressInner: BoxProps = {
  height: "100%",
  borderRadius: "s16",
  backgroundColor: "background",
};
