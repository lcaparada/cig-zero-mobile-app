import { CopilotStep, walkthroughable } from "react-native-copilot";

import { Box, BoxProps, Icon, Text } from "@components";
import { shadow } from "@theme";

interface PhraseOfDayProps {
  phrase: string;
}

const WalkthroughableBox = walkthroughable(Box);

export const PhraseOfDay = ({ phrase }: PhraseOfDayProps) => {
  return (
    <CopilotStep
      text="Esta seção traz uma reflexão diária, baseada na sua principal razão para parar de fumar, para te motivar a não ceder ao vício."
      order={6}
      name="phraseOfDay"
    >
      <WalkthroughableBox paddingHorizontal={"s25"} paddingVertical={"s30"}>
        <Box {...$boxWrapper} {...shadow}>
          <Header />
          <Text color={"neutralLighest"} preset="paragraphsBig" weight="medium">
            {phrase}
          </Text>
        </Box>
      </WalkthroughableBox>
    </CopilotStep>
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
