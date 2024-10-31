import { KeyboardAvoidingView, Platform, ScrollView } from "react-native";

import { StatusBar } from "expo-status-bar";

import { useAppSafeAreaContext, useAppTheme } from "@hooks";
import { ThemeSpacing } from "@theme";

import { Box } from "../Box/Box";
import { Button } from "../Button/Button";
import { TextVariants } from "../Text/Text";

import { ScreenHeader, ScrollViewContainer, ViewContainer } from "./components";

export type TitleAlign = "center" | "right" | "left";

export interface ScreenProps {
  children: React.ReactNode;
  canGoBack?: boolean;
  canGoBackSpecificyScreen?: () => void;
  screenTitle?: string;
  progressBar?: {
    progress: number;
  };
  button?: {
    action: () => void;
    text: string;
    disabled?: boolean;
    loading?: boolean;
  };
  scrollRef?: React.RefObject<ScrollView>;
  scrollable?: boolean;
  centerItems?: boolean;
  titleAlign?: TitleAlign;
  titleSize?: TextVariants;
  rightComponent?: JSX.Element;
  hasPaddingTop?: boolean;
  overflowVisible?: boolean;
  scrollViewPaddingBottom?: number;
  pullToRefresh?: {
    refreshing: boolean;
    onRefresh: () => void;
  };
  insets?: {
    top?: ThemeSpacing;
    left?: ThemeSpacing;
    right?: ThemeSpacing;
    bottom?: ThemeSpacing;
  };
}

export const Screen = ({
  children,
  button,
  scrollRef,
  canGoBack = false,
  scrollable = false,
  centerItems = false,
  titleAlign = "center",
  titleSize = "titleSmall",
  hasPaddingTop = true,
  rightComponent,
  progressBar,
  overflowVisible,
  pullToRefresh,
  screenTitle,
  scrollViewPaddingBottom = 100,
  canGoBackSpecificyScreen,
  insets = { left: "s24", right: "s24", top: "s0", bottom: "s0" },
}: ScreenProps) => {
  const { colors } = useAppTheme();
  const { top, bottom } = useAppSafeAreaContext();

  const Container = scrollable ? ScrollViewContainer : ViewContainer;

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      style={{
        flex: 1,
        backgroundColor: colors.background,
      }}
    >
      <Box
        paddingTop={insets.top}
        paddingLeft={insets.left}
        paddingRight={insets.right}
        paddingBottom={insets.bottom}
        style={{
          flex: 1,
          paddingTop: hasPaddingTop ? top : 0,
        }}
      >
        <Box
          paddingLeft={insets.left === "s0" ? "s24" : undefined}
          paddingRight={insets.right === "s0" ? "s24" : undefined}
        >
          {canGoBack || !!screenTitle || canGoBackSpecificyScreen ? (
            <ScreenHeader
              title={screenTitle}
              canGoBack={canGoBack}
              titleSize={titleSize}
              titleAlign={titleAlign}
              progressBar={progressBar}
              rightComponent={rightComponent}
              canGoBackSpecificyScreen={canGoBackSpecificyScreen}
            />
          ) : null}
        </Box>
        <Container
          backgroundColor={colors.background}
          centerItems={centerItems}
          scrollRef={scrollRef}
          pullToRefresh={pullToRefresh}
          overflowVisible={overflowVisible}
          scrollViewPaddingBottom={scrollViewPaddingBottom}
        >
          <StatusBar />
          {children}
        </Container>
        {!!button ? (
          <Button
            style={{
              position: "absolute",
              bottom: bottom,
              right: 24,
              left: 24,
            }}
            text={button.text}
            onPress={button.action}
            disabled={button.disabled ?? false}
            isLoading={button.loading ?? false}
          />
        ) : null}
      </Box>
    </KeyboardAvoidingView>
  );
};
