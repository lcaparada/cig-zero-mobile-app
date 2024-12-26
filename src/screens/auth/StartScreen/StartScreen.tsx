import { useState } from "react";
import {
  NativeScrollEvent,
  NativeSyntheticEvent,
  ScrollView,
} from "react-native";

import { Box } from "@components";

import { DirectionControls, FirstStep } from "./components";

export const StartScreen = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const yOffset = event.nativeEvent.contentOffset.y;
    const pageHeight = event.nativeEvent.layoutMeasurement.height;
    const page = Math.round(yOffset / pageHeight);
    setCurrentPage(page);
  };

  return (
    <Box
      flex={1}
      flexDirection={"row"}
      alignItems={"center"}
      paddingRight={"s24"}
    >
      <ScrollView
        pagingEnabled
        onScroll={handleScroll}
        decelerationRate={"fast"}
        scrollEventThrottle={16}
        showsVerticalScrollIndicator={false}
        style={{ flex: 1, paddingHorizontal: 24 }}
      >
        <FirstStep />
        <FirstStep />
      </ScrollView>
      <DirectionControls
        onDownPress={() => {}}
        onUpPress={() => {}}
        currentPage={currentPage}
      />
    </Box>
  );
};
