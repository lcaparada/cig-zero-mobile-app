import { useState } from "react";
import { StyleSheet } from "react-native";

import { AVPlaybackStatus, ResizeMode, Video } from "expo-av";
import { hideAsync } from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";

type SplashProps = {
  onComplete: (status: boolean) => void;
};

export const Splash = ({ onComplete }: SplashProps) => {
  const [lastStatus, setStatus] = useState<AVPlaybackStatus>(
    {} as AVPlaybackStatus
  );

  const onPlaybackStatusUpdate = (status: AVPlaybackStatus) => {
    if (status.isLoaded) {
      if (lastStatus.isLoaded !== status.isLoaded) {
        hideAsync();
      }
      if (status.didJustFinish) {
        onComplete(true);
      }
    }
    setStatus(() => status);
  };

  return (
    <>
      <StatusBar style="light" />
      <Video
        shouldPlay
        isLooping={false}
        style={StyleSheet.absoluteFill}
        resizeMode={ResizeMode.COVER}
        source={require("../../../assets/splash.mp4")}
        onPlaybackStatusUpdate={onPlaybackStatusUpdate}
      />
    </>
  );
};
