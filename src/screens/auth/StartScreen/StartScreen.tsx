import { ScrollView } from "react-native";

import { Box } from "@components";

import { DirectionControls, FirstStep } from "./components";

export const StartScreen = () => {
  return (
    <Box
      flex={1}
      flexDirection={"row"}
      alignItems={"center"}
      paddingRight={"s24"}
    >
      <ScrollView
        pagingEnabled
        decelerationRate={"fast"}
        showsVerticalScrollIndicator={false}
        style={{ flex: 1, paddingHorizontal: 24 }}
      >
        <FirstStep />
      </ScrollView>
      <DirectionControls onDownPress={() => {}} onUpPress={() => {}} />
    </Box>
  );
};
