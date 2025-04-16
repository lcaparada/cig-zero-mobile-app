import { ScrollView, View } from "react-native";

interface ScreenContainerProps {
  children: React.ReactNode;
  hasFlexOne?: boolean;
  backgroundColor: string;
}

export const ScrollViewContainer = ({
  children,
  backgroundColor,
  hasFlexOne = false,
}: ScreenContainerProps) => {
  return (
    <ScrollView
      testID="scroll-view-container"
      keyboardShouldPersistTaps="handled"
      style={{
        backgroundColor,
        flex: hasFlexOne ? 1 : undefined,
      }}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingBottom: 40 }}
    >
      {children}
    </ScrollView>
  );
};

export const ViewContainer = ({
  children,
  backgroundColor,
  hasFlexOne = false,
}: ScreenContainerProps) => {
  return (
    <View
      testID="view-container"
      style={{
        backgroundColor,
        flex: hasFlexOne ? 1 : undefined,
      }}
    >
      {children}
    </View>
  );
};
