import { ScrollView } from "react-native";

import { Box, Button } from "@components";
import { OnboardingScreenProps } from "@routes";

import { steps } from "@constraints";

import { DirectionControls, Step } from "./components";
import { useFeaturesScreen } from "./useFeaturesScreen";

export const FeaturesScreen = ({
  route,
}: OnboardingScreenProps<"FeaturesScreen">) => {
  const {
    bottom,
    scrollRef,
    currentPage,
    navigation,
    WIDTH_SCREEN,
    handleScroll,
    handleLayout,
    scrollToPage,
  } = useFeaturesScreen();

  return (
    <Box
      flex={1}
      flexDirection={"row"}
      alignItems={"center"}
      paddingRight={"s24"}
      backgroundColor={"background"}
    >
      <ScrollView
        ref={scrollRef}
        pagingEnabled
        onScroll={handleScroll}
        decelerationRate={"fast"}
        scrollEventThrottle={16}
        onLayout={handleLayout}
        showsVerticalScrollIndicator={false}
        style={{
          flex: 1,
          paddingHorizontal: 24,
        }}
      >
        {steps.map((step, index) => (
          <Step
            key={index}
            description={step.description}
            imageName={step.imageName}
            primaryTitle={step.primaryTitle}
            secondaryTitle={step.secondaryTitle}
          />
        ))}
      </ScrollView>
      <DirectionControls
        length={steps.length}
        onDownPress={() => scrollToPage(currentPage + 1)}
        onUpPress={() => scrollToPage(currentPage - 1)}
        currentPage={currentPage}
      />
      {currentPage === steps.length - 1 && (
        <Box
          left={24}
          bottom={bottom}
          position={"absolute"}
          width={WIDTH_SCREEN - 24 * 2}
        >
          <Button
            text="Iniciar jornada"
            onPress={() =>
              navigation.navigate("SubscriptionScreen", {
                likeToReceiveDailyReminders:
                  route.params.likeToReceiveDailyReminders,
              })
            }
          />
        </Box>
      )}
    </Box>
  );
};
