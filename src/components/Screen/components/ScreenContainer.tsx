import { ScrollView, View } from "react-native";

interface ScreenContainerProps {
  children: React.ReactNode;
  backgroundColor: string;
  centerItems?: boolean;
  scrollRef?: React.RefObject<ScrollView>;
  overflowVisible?: boolean;
}

export const ScrollViewContainer = ({
  children,
  centerItems,
  backgroundColor,
  scrollRef,
  overflowVisible,
}: ScreenContainerProps) => {
  return (
    <ScrollView
      keyboardShouldPersistTaps="handled"
      ref={scrollRef}
      style={{
        flex: 1,
        backgroundColor,
        overflow: overflowVisible ? "visible" : "hidden",
        justifyContent: centerItems ? "center" : undefined,
      }}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingBottom: 100 }}
    >
      {children}
    </ScrollView>
  );
};

export const ViewContainer = ({
  children,
  centerItems,
  overflowVisible,
  backgroundColor,
}: ScreenContainerProps) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor,
        overflow: overflowVisible ? "visible" : "hidden",

        justifyContent: centerItems ? "center" : undefined,
      }}
    >
      {children}
    </View>
  );
};
