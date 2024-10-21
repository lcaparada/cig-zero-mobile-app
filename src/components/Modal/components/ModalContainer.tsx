import { ScrollView, View } from "react-native";

interface ScreenContainerProps {
  children: React.ReactNode;
  backgroundColor: string;
  hasFlexOne?: boolean;
}

export const ScrollViewContainer = ({
  children,
  backgroundColor,
  hasFlexOne = false,
}: ScreenContainerProps) => {
  return (
    <ScrollView
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
      style={{
        backgroundColor,
        flex: hasFlexOne ? 1 : undefined,
      }}
    >
      {children}
    </View>
  );
};
