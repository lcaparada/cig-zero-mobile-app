import { KeyboardAvoidingView, Platform } from "react-native";

import { StatusBar } from "expo-status-bar";

import { useAppSafeAreaContext, useAppTheme } from "@hooks";
import { ThemeColors, ThemeSpacing } from "@theme";

import { useSettings } from "@services";

import { Box } from "../Box/Box";
import { Button } from "../Button/Button";
import { TextVariants, TextWeightVariants } from "../Text/Text";

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
  scrollable?: boolean;
  centerItems?: boolean;
  titleAlign?: TitleAlign;
  titleSize?: TextVariants;
  titleColor?: ThemeColors;
  titleWeight?: TextWeightVariants;
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
  canGoBack = false,
  scrollable = false,
  centerItems = false,
  titleAlign = "center",
  titleSize = "titleSmall",
  hasPaddingTop = true,
  rightComponent,
  titleColor,
  titleWeight,
  progressBar,
  overflowVisible,
  pullToRefresh,
  screenTitle,
  scrollViewPaddingBottom = 40,
  canGoBackSpecificyScreen,
  insets = { left: "s24", right: "s24", top: "s0", bottom: "s0" },
}: ScreenProps) => {
  const { colors } = useAppTheme();
  const { top, bottom } = useAppSafeAreaContext();

  const { appTheme } = useSettings();

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
          {progressBar ||
          canGoBack ||
          !!screenTitle ||
          canGoBackSpecificyScreen ? (
            <ScreenHeader
              title={screenTitle}
              canGoBack={canGoBack}
              titleColor={titleColor}
              titleWeight={titleWeight}
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
          pullToRefresh={pullToRefresh}
          overflowVisible={overflowVisible}
          scrollViewPaddingBottom={scrollViewPaddingBottom}
        >
          <StatusBar style={appTheme === "dark" ? "light" : "dark"} />
          {children}
        </Container>
        {!!button ? (
          <Button
            style={{
              position: "absolute",
              bottom: bottom,
              zIndex: 0,
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
