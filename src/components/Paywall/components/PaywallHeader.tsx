import { useEffect, useState } from "react";

import { useAppSafeAreaContext } from "@hooks";
import { shadow } from "@theme";

import { calculateTimeDifferenceFromNow } from "@helpers";
import { useAuth } from "@services";
import { Box } from "src/components/Box/Box";
import { Counter } from "src/components/Counter/Counter";
import { Icon } from "src/components/Icon/Icon";
import { LogOutButton } from "src/components/LogOutButton/LogOutButton";
import { Text } from "src/components/Text/Text";

interface PaywallHeaderProps {
  closePaywall?: () => void;
}

export const PaywallHeader = ({ closePaywall }: PaywallHeaderProps) => {
  const { top } = useAppSafeAreaContext();

  const { session } = useAuth();

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
  });

  function getTimeLeft() {
    const endDate = new Date(session?.user?.created_at ?? new Date());
    setTimeLeft(calculateTimeDifferenceFromNow(endDate.toISOString(), true));
  }

  useEffect(() => {
    getTimeLeft();
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
        {closePaywall && timeLeft.minutes > 0 ? (
          <Icon
            name="x"
            size="s24"
            color="neutralLighest"
            onPress={closePaywall}
            disabled={timeLeft.minutes === 0}
          />
        ) : (
          <LogOutButton
            color="neutralLighest"
            disabled={timeLeft.minutes > 0}
          />
        )}
      </Box>
      <Box alignItems={"center"} mt={"s20"}>
        <Text color={"neutralLighest"} weight="semiBold" preset="default">
          Seu período experimental encerra em
        </Text>
        <Counter
          counter={{
            days: timeLeft.days,
            hours: timeLeft.hours,
            minutes: timeLeft.minutes,
          }}
        />
      </Box>
    </Box>
  );
};
