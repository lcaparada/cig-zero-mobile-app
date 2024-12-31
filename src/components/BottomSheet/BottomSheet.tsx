import { Fragment, useState } from "react";
import { StyleSheet } from "react-native";

import { Gesture, GestureDetector } from "react-native-gesture-handler";
import {
  FadeIn,
  FadeOut,
  runOnJS,
  withTiming,
  withSpring,
  SlideInDown,
  SlideOutDown,
  useSharedValue,
  useAnimatedStyle,
} from "react-native-reanimated";

import { useAppTheme } from "@hooks";

import {
  AnimatedBoxRNR,
  AnimatedBoxProps,
  PressableBoxProps,
  AnimatedPressableBox,
} from "../Box/Box";
import { Button } from "../Button/Button";
import { ButtonPresetType } from "../Button/buttonPreset";

import {
  BottomSheetHeader,
  ScrollViewContainer,
  ViewContainer,
} from "./components";
import { calculateHeight } from "./utils";

export interface BottomSheetProps {
  title: string;
  rightButton?: {
    text: string;
    action: () => void;
  };
  disabledToClose?: boolean;
  scrollable?: boolean;
  children: React.ReactNode;
  hasKeyboard?: boolean;
  hasFlexOne?: boolean;
  button?: {
    action: () => void;
    text: string;
    disabled?: boolean;
    preset: ButtonPresetType;
    isLoading?: boolean;
  };
  height?: string | number;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

// eslint-disable-next-line react/display-name
export const BottomSheet = ({
  title,
  button,
  children,
  hasFlexOne = false,
  scrollable = true,
  height = "70%",
  disabledToClose = false,
  rightButton,
  hasKeyboard = false,
  setVisible,
}: BottomSheetProps) => {
  const { colors } = useAppTheme();

  const [bottomSheetLayout, setBottomSheetLayout] = useState(0);

  const BOTTOM_SHEET_HEIGHT = calculateHeight(
    height === "auto" ? bottomSheetLayout : height
  );

  const Container = scrollable ? ScrollViewContainer : ViewContainer;

  const offset = useSharedValue(0);

  const pan = Gesture.Pan()
    .onChange((event) => {
      const offsetDelta = event.changeY + offset.value;
      const clamp = Math.max(-20, offsetDelta);
      offset.value = offsetDelta > 0 ? offsetDelta : withSpring(clamp);
    })
    .onFinalize(() => {
      if (offset.value < BOTTOM_SHEET_HEIGHT / 3) {
        offset.value = withTiming(0);
      } else {
        if (disabledToClose) {
          offset.value = withTiming(0);
        } else {
          offset.value = withTiming(BOTTOM_SHEET_HEIGHT, {}, () =>
            runOnJS(setVisible)(false)
          );
        }
      }
    });
  const translateY = useAnimatedStyle(() => ({
    transform: [{ translateY: offset.value }],
  }));

  return (
    <Fragment>
      <AnimatedPressableBox
        {...$backdrop}
        style={[StyleSheet.absoluteFillObject, { zIndex: 1 }]}
        onPress={() => {
          if (disabledToClose) {
            return;
          } else {
            setVisible(false);
          }
        }}
        entering={FadeIn}
        exiting={FadeOut}
      />

      <GestureDetector gesture={pan}>
        <AnimatedBoxRNR
          {...($sheet as any)}
          onLayout={(event) =>
            setBottomSheetLayout(event.nativeEvent.layout.height)
          }
          entering={SlideInDown.springify().damping(18)}
          exiting={SlideOutDown}
          style={translateY}
          height={BOTTOM_SHEET_HEIGHT}
        >
          <BottomSheetHeader
            title={title}
            closeModal={() => setVisible(false)}
            rightButton={rightButton}
            disabledToClose={disabledToClose}
          />
          <Container
            backgroundColor={colors.background}
            hasFlexOne={hasFlexOne}
          >
            {children}
            {hasKeyboard && button && (
              <Button
                alignSelf={"center"}
                width={"100%"}
                mt={"s30"}
                text={button.text}
                preset={button.preset}
                disabled={button.disabled}
                isLoading={button.isLoading}
                onPress={button.action}
              />
            )}
          </Container>
          {!hasKeyboard && button && (
            <Button
              alignSelf={"center"}
              width={"100%"}
              mb={"s20"}
              mt={"s30"}
              text={button.text}
              preset={button.preset}
              disabled={button.disabled}
              isLoading={button.isLoading}
              onPress={button.action}
            />
          )}
        </AnimatedBoxRNR>
      </GestureDetector>
    </Fragment>
  );
};

const $sheet: AnimatedBoxProps = {
  width: "100%",
  paddingHorizontal: "s30",
  paddingTop: "s30",
  paddingBottom: "s12",
  borderTopLeftRadius: "s25",
  borderTopRightRadius: "s25",
  backgroundColor: "background",
  zIndex: 1,
  position: "absolute",
  bottom: -20 * 1.1,
};

const $backdrop: PressableBoxProps = {
  backgroundColor: "backgroundModal",
};
