import { Box, BoxProps, Icon, PressableBox, Text } from "@components";
import { shadow } from "@theme";

interface PhraseOfDayProps {
  phrase: string;
}

export const PhraseOfDay = ({ phrase }: PhraseOfDayProps) => {
  return (
    <PressableBox paddingHorizontal={"s25"} paddingVertical={"s30"}>
      <Box {...$boxWrapper} {...shadow}>
        <Header />
        <Text color={"neutralLighest"} preset="paragraphsBig" weight="medium">
          {phrase}
        </Text>
      </Box>
    </PressableBox>
  );
};

const Header = () => {
  return (
    <Box flexDirection={"row"} alignItems={"center"} columnGap={"s8"}>
      <Icon name="lightBulb" size="s26" />
      <Text weight="semiBold" color={"neutralLighest"}>
        Reflexão do dia
      </Text>
    </Box>
  );
};

const $boxWrapper: BoxProps = {
  rowGap: "s12",
  borderRadius: "s16",
  paddingVertical: "s18",
  backgroundColor: "primary",
  paddingHorizontal: "s20",
};
