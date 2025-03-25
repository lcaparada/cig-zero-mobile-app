import { useAppSafeAreaContext } from "@hooks";
import { shadow } from "@theme";

import { Box } from "src/components/Box/Box";
import { Icon } from "src/components/Icon/Icon";
import { LogOutButton } from "src/components/LogOutButton/LogOutButton";
import { Text } from "src/components/Text/Text";
import { TimeCard } from "src/components/TimeCard/TimeCard";

interface PaywallHeaderProps {
  hasTimer: boolean;
  timeLeft: {
    days: number;
    hours: number;
    minutes: number;
  };
  closePaywall?: () => void;
}

export const PaywallHeader = ({
  hasTimer,
  timeLeft,
  closePaywall,
}: PaywallHeaderProps) => {
  const { top } = useAppSafeAreaContext();

  return (
    <Box
      backgroundColor={"primary"}
      alignItems={"center"}
      style={{ paddingTop: top }}
      paddingBottom={"s22"}
      justifyContent={"center"}
      {...shadow}
    >
      <Text color={"neutralLighest"} weight="bold" preset="display">
        CigZero Plus
      </Text>

      <Box position={"absolute"} right={24} top={top + 8}>
        {closePaywall && timeLeft.minutes > 0 ? (
          <Icon
            name="x"
            size="s24"
            color="neutralLighest"
            onPress={closePaywall}
          />
        ) : (
          <LogOutButton color="neutralLighest" />
        )}
      </Box>
      {hasTimer && (
        <Box alignItems={"center"} mt={"s20"}>
          <Text color={"neutralLighest"} weight="semiBold" preset="default">
            Seu período experimental encerra em
          </Text>
          <Box
            flexDirection={"row"}
            columnGap={"s10"}
            alignItems={"center"}
            justifyContent={"center"}
            mt={"s20"}
          >
            <TimeCard label="dias" time={timeLeft.days.toString()} />
            <TimeCard label="horas" time={timeLeft.hours.toString()} />
            <TimeCard label="minutos" time={timeLeft.minutes.toString()} />
          </Box>
        </Box>
      )}
    </Box>
  );
};
