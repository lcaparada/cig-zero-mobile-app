import {
  NativeScrollEvent,
  NativeSyntheticEvent,
  RefreshControl,
  View,
} from "react-native";

import { ScrollView } from "react-native-gesture-handler";

interface ScreenContainerProps {
  children: React.ReactNode;
  backgroundColor: string;
  centerItems?: boolean;
  scrollViewPaddingBottom: number;
  overflowVisible?: boolean;
  onScroll?: (event: NativeSyntheticEvent<NativeScrollEvent>) => void;
  pullToRefresh?: {
    refreshing: boolean;
    onRefresh: () => void;
  };
}

export const ScrollViewContainer = ({
  children,
  centerItems,
  pullToRefresh,
  backgroundColor,
  overflowVisible,
  onScroll,
  scrollViewPaddingBottom,
}: ScreenContainerProps) => {
  return (
    <ScrollView
      keyboardShouldPersistTaps="handled"
      refreshControl={
        !!pullToRefresh ? (
          <RefreshControl
            refreshing={pullToRefresh.refreshing}
            onRefresh={pullToRefresh.onRefresh}
          />
        ) : undefined
      }
      onScroll={onScroll}
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
