import { useEffect, useState } from "react";
import { StyleSheet } from "react-native";

import { AVPlaybackStatus, ResizeMode, Video } from "expo-av";
import { hideAsync } from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

import { useAppTheme } from "@hooks";

import { AnimatedBoxRNR } from "../Box/Box";

type SplashProps = {
  loading: boolean;
  onComplete: (status: boolean) => void;
};

export const Splash = ({ loading, onComplete }: SplashProps) => {
  const [animationDone, setAnimationDone] = useState(false);

  const opacity = useSharedValue(1);

  const [lastStatus, setStatus] = useState<AVPlaybackStatus>(
    {} as AVPlaybackStatus
  );

  const theme = useAppTheme();
  const FADE_ANIMATION_DURATION = 500;

  const onPlaybackStatusUpdate = (status: AVPlaybackStatus) => {
    if (status.isLoaded) {
      if (lastStatus.isLoaded !== status.isLoaded) {
        hideAsync();
      }
      if (status.didJustFinish) {
        setAnimationDone(true);
      }
    }
    setStatus(() => status);
  };

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
  }));

  useEffect(() => {
    if (animationDone && !loading) {
      opacity.value = withTiming(0, {
        duration: FADE_ANIMATION_DURATION,
      });
      setTimeout(() => onComplete(true), FADE_ANIMATION_DURATION);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [animationDone, loading]);

  return (
    <AnimatedBoxRNR
      backgroundColor={"primary"}
      style={[animatedStyle, StyleSheet.absoluteFill]}
    >
      <StatusBar style="light" />
      <Video
        shouldPlay
        isLooping={false}
        style={[
          StyleSheet.absoluteFill,
          { backgroundColor: theme.colors.bluePrimary },
        ]}
        resizeMode={ResizeMode.COVER}
        source={require("../../../assets/splash.mp4")}
        onPlaybackStatusUpdate={onPlaybackStatusUpdate}
      />
    </AnimatedBoxRNR>
  );
};
