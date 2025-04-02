import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import * as Haptics from "expo-haptics";

import { useAppSafeAreaContext } from "@hooks";
import { AppTabBottomTabParamList } from "@routes";

import { Box, BoxProps, TouchableOpacityBox } from "../Box/Box";
import { Icon } from "../Icon/Icon";
import { Text } from "../Text/Text";

import { mapScreenToProps } from "./mapScreenToProps";

export function TabBar({ state, descriptors, navigation }: BottomTabBarProps) {
  const { bottom } = useAppSafeAreaContext();
  return (
    <Box {...$boxStyle} style={[{ paddingBottom: bottom }]}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
              ? options.title
              : route.name;

        const isFocused = state.index === index;

        const tabItem =
          mapScreenToProps[route.name as keyof AppTabBottomTabParamList];

        const onPress = () => {
          Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, {});
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        return (
          <TouchableOpacityBox
            hitSlop={12}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            key={index}
            flex={1}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Icon
              name={tabItem.icon}
              color={isFocused ? "primary" : "backgroundSecondConstrast"}
              size="s28"
              strokeWidth={2}
            />
            <Text
              color={isFocused ? "primary" : "backgroundSecondConstrast"}
              preset="paragraphsBig"
              weight="medium"
            >
              {label as string}
            </Text>
          </TouchableOpacityBox>
        );
      })}
    </Box>
  );
}

const $boxStyle: BoxProps = {
  paddingTop: "s22",
  flexDirection: "row",
  backgroundColor: "background",
};
