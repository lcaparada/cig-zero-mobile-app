import { useRef, useState } from "react";
import {
  LayoutChangeEvent,
  NativeScrollEvent,
  NativeSyntheticEvent,
  ScrollView,
} from "react-native";

import { Box } from "@components";

import { DirectionControls, FirstStep } from "./components";

export const StartScreen = () => {
  const [pageHeight, setPageHeight] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);

  const scrollRef = useRef<ScrollView>(null);

  const handleLayout = (event: LayoutChangeEvent) => {
    const height = event.nativeEvent.layout.height;
    setPageHeight(height);
  };

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const yOffset = event.nativeEvent.contentOffset.y;
    const page = Math.round(yOffset / pageHeight);
    setCurrentPage(page);
  };

  const scrollToPage = (page: number) => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({ y: page * pageHeight, animated: true });
    }
  };

  return (
    <Box
      flex={1}
      flexDirection={"row"}
      alignItems={"center"}
      paddingRight={"s24"}
    >
      <ScrollView
        ref={scrollRef}
        pagingEnabled
        onScroll={handleScroll}
        decelerationRate={"fast"}
        scrollEventThrottle={16}
        onLayout={handleLayout}
        showsVerticalScrollIndicator={false}
        style={{ flex: 1, paddingHorizontal: 24 }}
      >
        <FirstStep />
        <FirstStep />
        <FirstStep />
        <FirstStep />
      </ScrollView>
      <DirectionControls
        onDownPress={() => scrollToPage(currentPage + 1)}
        onUpPress={() => scrollToPage(currentPage - 1)}
        currentPage={currentPage}
      />
    </Box>
  );
};
