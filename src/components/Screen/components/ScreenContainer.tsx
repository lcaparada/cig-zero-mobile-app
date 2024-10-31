import { RefreshControl, ScrollView, View } from "react-native";

interface ScreenContainerProps {
  children: React.ReactNode;
  backgroundColor: string;
  centerItems?: boolean;
  scrollViewPaddingBottom: number;
  scrollRef?: React.RefObject<ScrollView>;
  overflowVisible?: boolean;
  pullToRefresh?: {
    refreshing: boolean;
    onRefresh: () => void;
  };
}

export const ScrollViewContainer = ({
  children,
  scrollRef,
  centerItems,
  pullToRefresh,
  backgroundColor,
  overflowVisible,
  scrollViewPaddingBottom,
}: ScreenContainerProps) => {
  return (
    <ScrollView
      keyboardShouldPersistTaps="handled"
      ref={scrollRef}
      refreshControl={
        !!pullToRefresh ? (
          <RefreshControl
            refreshing={pullToRefresh.refreshing}
            onRefresh={pullToRefresh.onRefresh}
          />
        ) : undefined
      }
      style={{
        flex: 1,
        backgroundColor,
        overflow: overflowVisible ? "visible" : "hidden",
        justifyContent: centerItems ? "center" : undefined,
      }}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingBottom: scrollViewPaddingBottom }}
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
