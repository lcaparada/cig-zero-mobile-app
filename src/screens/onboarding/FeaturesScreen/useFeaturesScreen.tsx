import { useRef, useState } from "react";
import {
  ScrollView,
  LayoutChangeEvent,
  NativeScrollEvent,
  NativeSyntheticEvent,
  useWindowDimensions,
} from "react-native";

import { useAppSafeAreaContext } from "@hooks";

import { useNavigation } from "@react-navigation/native";

export const useFeaturesScreen = () => {
  const [pageHeight, setPageHeight] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);

  const navigation = useNavigation();

  const scrollRef = useRef<ScrollView>(null);
  const { bottom } = useAppSafeAreaContext();
  const { width: WIDTH_SCREEN, height: HEIGHT_SCREEN } = useWindowDimensions();

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

  function navigateToSubscriptionScreen() {
    navigation.navigate("SubscriptionScreen");
  }

  return {
    bottom,
    scrollRef,
    currentPage,
    WIDTH_SCREEN,
    HEIGHT_SCREEN,
    handleScroll,
    handleLayout,
    scrollToPage,
    navigateToSubscriptionScreen,
  };
};
