import { useRef, useState } from "react";
import {
  ScrollView,
  LayoutChangeEvent,
  NativeScrollEvent,
  NativeSyntheticEvent,
  useWindowDimensions,
} from "react-native";

import { useAppSafeAreaContext } from "@hooks";

export const useStartModal = () => {
  const [pageHeight, setPageHeight] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);

  const scrollRef = useRef<ScrollView>(null);
  const { bottom } = useAppSafeAreaContext();
  const { width: WIDTH_SCREEN } = useWindowDimensions();

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

  return {
    bottom,
    scrollRef,
    currentPage,
    WIDTH_SCREEN,
    handleScroll,
    handleLayout,
    scrollToPage,
  };
};
