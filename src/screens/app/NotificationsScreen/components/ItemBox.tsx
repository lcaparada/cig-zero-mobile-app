import { useState } from "react";

import * as Haptics from "expo-haptics";
import { usePostHog } from "posthog-react-native";

import { BoxProps, Box, Text, Switch } from "@components";
import { useNotificationsSettings } from "@hooks";

import { PostHogEventsName } from "@constraints";
import {
  NotificationSettingsData,
  useUpdateNotificationSetting,
} from "@domain";

type ItemBoxProps = {
  title: string;
  index: number;
  length: number;
  isActive: boolean;
  description: string;
  notificationKey: keyof NotificationSettingsData;
};

export const ItemBox = ({
  index,
  title,
  length,
  description,
  notificationKey,
  isActive: isActiveData,
}: ItemBoxProps) => {
  const [isActive, setIsActive] = useState(isActiveData);

  const { areNotificationsActive } = useNotificationsSettings();

  const { isPending, updateNotificationSetting } =
    useUpdateNotificationSetting();

  const handleUpdateNotificationSetting = async () => {
    try {
      setIsActive(!isActive);
      await updateNotificationSetting({
        state: !isActive,
        key: notificationKey,
      });
    } catch (error) {
      setIsActive(!isActive);
      console.error(error);
    }
  };

  const borderRadiusStyles: BoxProps = {
    borderTopLeftRadius: index === 0 ? "s10" : undefined,
    borderTopRightRadius: index === 0 ? "s10" : undefined,
    borderBottomLeftRadius: index === length - 1 ? "s10" : undefined,
    borderBottomRightRadius: index === length - 1 ? "s10" : undefined,
  };

  const posthog = usePostHog();

  const _handleUpdateNotificationSetting = async () => {
    posthog.capture(PostHogEventsName.PRESS_TO_UPDATE_NOTIFICATION_SETTINGS);
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    handleUpdateNotificationSetting();
  };

  return (
    <Box
      {...borderRadiusStyles}
      padding="s18"
      backgroundColor="bluePrimaryWith25PercentOpacity"
    >
      <Box flexDirection={"row"} alignItems={"center"} columnGap={"s10"}>
        <Box flex={1} rowGap={"s4"}>
          <Text weight="medium" color={"primary"}>
            {title}
          </Text>
          <Text color={"backgroundConstrast"}>{description}</Text>
        </Box>
        <Switch
          isActive={isActive}
          disabled={!areNotificationsActive || isPending}
          setIsActive={setIsActive}
          onPress={_handleUpdateNotificationSetting}
        />
      </Box>
    </Box>
  );
};
