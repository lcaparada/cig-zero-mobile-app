import { Box, BoxProps, Icon, Text } from "@components";
import { shadow } from "@theme";
import { TourGuideZone } from "rn-tourguide";

interface PhraseOfDayProps {
  phrase: string;
}

export const PhraseOfDay = ({ phrase }: PhraseOfDayProps) => {
  return (
    <TourGuideZone
      text="Esta seção traz uma reflexão diária, baseada na sua principal razão para parar de fumar, para te motivar a não ceder ao vício."
      zone={6}
    >
      <Box paddingHorizontal={"s25"} paddingVertical={"s30"}>
        <Box {...$boxWrapper} {...shadow}>
          <Header />
          <Text color={"neutralLighest"} preset="paragraphsBig" weight="medium">
            {phrase}
          </Text>
        </Box>
      </Box>
    </TourGuideZone>
  );
};

const Header = () => {
  return (
    <Box flexDirection={"row"} alignItems={"center"} columnGap={"s8"}>
      <Icon name="thinking" size="s26" />
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
