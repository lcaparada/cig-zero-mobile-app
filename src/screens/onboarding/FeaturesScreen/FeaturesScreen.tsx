import { Platform, ScrollView } from "react-native";

import { Box, Button } from "@components";

import { androidSteps, iosSteps } from "@constraints";

import { DirectionControls, FeaturesScreenHeader, Step } from "./components";
import { useFeaturesScreen } from "./useFeaturesScreen";

export const FeaturesScreen = () => {
  const {
    bottom,
    scrollRef,
    currentPage,
    WIDTH_SCREEN,
    handleScroll,
    handleLayout,
    scrollToPage,
    HEIGHT_SCREEN,
    navigateToSubscriptionScreen,
  } = useFeaturesScreen();

  return (
    <Box
      flex={1}
      flexDirection={"row"}
      alignItems={"center"}
      paddingRight={"s24"}
      backgroundColor={"background"}
    >
      <FeaturesScreenHeader />
      <ScrollView
        ref={scrollRef}
        pagingEnabled
        onScroll={handleScroll}
        decelerationRate={"fast"}
        scrollEventThrottle={16}
        onLayout={handleLayout}
        showsVerticalScrollIndicator={false}
        style={{
          paddingHorizontal: 24,
        }}
        snapToInterval={HEIGHT_SCREEN}
        snapToAlignment="center"
      >
        {Platform.OS === "ios"
          ? iosSteps.map((step, index) => <Step key={index} {...step} />)
          : androidSteps.map((step, index) => <Step key={index} {...step} />)}
      </ScrollView>
      <DirectionControls
        length={Platform.OS === "ios" ? iosSteps.length : androidSteps.length}
        onDownPress={() => scrollToPage(currentPage + 1)}
        onUpPress={() => scrollToPage(currentPage - 1)}
        currentPage={currentPage}
      />
      <Box
        left={24}
        bottom={bottom}
        position={"absolute"}
        width={WIDTH_SCREEN - 24 * 2}
      >
        <Button text="Iniciar jornada" onPress={navigateToSubscriptionScreen} />
      </Box>
    </Box>
  );
};
