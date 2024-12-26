import { useRef, useState } from "react";
import {
  ScrollView,
  LayoutChangeEvent,
  NativeScrollEvent,
  NativeSyntheticEvent,
  useWindowDimensions,
} from "react-native";

import { useNavigation } from "@react-navigation/native";

import { useAppSafeAreaContext } from "@hooks";

export const useStartScreen = () => {
  const [pageHeight, setPageHeight] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);

  const scrollRef = useRef<ScrollView>(null);
  const { bottom } = useAppSafeAreaContext();
  const { width: WIDTH_SCREEN } = useWindowDimensions();
  const navigation = useNavigation();

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
    navigation,
    WIDTH_SCREEN,
    handleScroll,
    handleLayout,
    scrollToPage,
  };
};
