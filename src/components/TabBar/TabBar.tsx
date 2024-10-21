import { BottomTabBarProps } from "@react-navigation/bottom-tabs";

import { useAppSafeAreaContext } from "@hooks";
import { AppTabBottomTabParamList } from "@routes";

import { Box, BoxProps, TouchableOpacityBox } from "../Box/Box";
import { Icon } from "../Icon/Icon";

import { mapScreenToProps } from "./mapScreenToProps";

export function TabBar({ state, descriptors, navigation }: BottomTabBarProps) {
  const { bottom } = useAppSafeAreaContext();
  return (
    <Box {...$boxStyle} style={[{ paddingBottom: bottom + 35 }]}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];

        const isFocused = state.index === index;

        const tabItem =
          mapScreenToProps[route.name as keyof AppTabBottomTabParamList];

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
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
            flex={1}
            alignItems={"center"}
            key={index}
          >
            <Icon
              name={tabItem.icon}
              color={isFocused ? "primary" : "backgroundSecondConstrast"}
              size="s28"
              strokeWidth={2}
            />
          </TouchableOpacityBox>
        );
      })}
    </Box>
  );
}

const $boxStyle: BoxProps = {
  height: 80,
  paddingTop: "s22",
  flexDirection: "row",
  backgroundColor: "background",
};
