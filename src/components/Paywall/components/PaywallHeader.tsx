import { useEffect, useState } from "react";

import { useAppSafeAreaContext } from "@hooks";
import { shadow } from "@theme";

import { calculateTimeDifferenceFromNow } from "@helpers";
import { useAuth, UserMetaData } from "@services";
import { Box } from "src/components/Box/Box";
import { Icon } from "src/components/Icon/Icon";
import { LogOutButton } from "src/components/LogOutButton/LogOutButton";
import { Text } from "src/components/Text/Text";
import { TimeCard } from "src/components/TimeCard/TimeCard";

interface PaywallHeaderProps {
  closePaywall?: () => void;
}

export const PaywallHeader = ({ closePaywall }: PaywallHeaderProps) => {
  const { top } = useAppSafeAreaContext();

  const { session } = useAuth();

  const userMetaData = session?.user.user_metadata as UserMetaData;

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
  });

  function getTimeLeft() {
    const endDate = new Date(userMetaData.firstAppLaunch);
    setTimeLeft(calculateTimeDifferenceFromNow(endDate.toISOString(), true));
  }

  useEffect(() => {
    const interval = setInterval(() => {
      getTimeLeft();
    }, 1000);

    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
        {closePaywall ? (
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
    </Box>
  );
};
