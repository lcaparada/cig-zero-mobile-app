import { ToastType, useToastService } from "@services";

import { AnimatedBoxRNR, Box, BoxProps } from "../Box/Box";
import { Icon, IconName } from "../Icon/Icon";
import { Text } from "../Text/Text";

import { useToast } from "./useToast";

export const Toast = () => {
  const { toast, MAX_WIDTH, animatedStyles } = useToast();

  const { hideToast } = useToastService();

  if (!toast) return;

  return (
    <AnimatedBoxRNR
      alignSelf={"center"}
      onTouchStart={() => hideToast(toast?.duration ?? 7000)}
      style={[animatedStyles, { position: "absolute" }]}
      {...$boxShadow}
      backgroundColor={"background"}
      borderRadius={"s16"}
    >
      <Box {...$boxStyle} maxWidth={MAX_WIDTH * 0.95}>
        <Icon name={mapTypeToIcon[toast?.type ?? "success"]} size="s40" />
        <Text weight="bold" style={{ flexShrink: 1 }}>
          {toast?.message ?? ""}
        </Text>
      </Box>
    </AnimatedBoxRNR>
  );
};

const mapTypeToIcon: Record<ToastType, IconName> = {
  success: "success",
  info: "info",
  error: "error",
};

const $boxStyle: BoxProps = {
  padding: "s16",
  backgroundColor: "background",
  borderRadius: "s16",
  flexDirection: "row",
  columnGap: "s16",
  alignItems: "center",
};

const $boxShadow: BoxProps = {
  shadowColor: "dark",
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.25,
  shadowRadius: 3.84,

  elevation: 5,
};
