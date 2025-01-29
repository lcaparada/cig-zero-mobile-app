import { Modal, ScrollView } from "react-native";

import { Box, Button } from "@components";

import { steps } from "@constraints";

import { DirectionControls, Step } from "./components";
import { useStartModal } from "./useStartModal";

interface StartModalProps {
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

export const StartModal = ({ visible }: StartModalProps) => {
  const {
    bottom,
    scrollRef,
    currentPage,
    WIDTH_SCREEN,
    handleScroll,
    handleLayout,
    scrollToPage,
  } = useStartModal();

  return (
    <Modal transparent animationType="none" visible={visible}>
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
              onPress={() => {
                //TODO : OPEN SUBSCRIPTION MODAL
              }}
            />
          </Box>
        )}
      </Box>
    </Modal>
  );
};
