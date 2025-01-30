import { Platform } from "react-native";

import { usePostHog } from "posthog-react-native";

import { PostHogEventsName } from "@constraints";
import { useAuthAppleSignIn, useAuthGoogleSignIn } from "@domain";

import { Box, BoxProps } from "../Box/Box";
import { Button } from "../Button/Button";
import { IconName } from "../Icon/Icon";

interface SocialButton {
  text: string;
  isLoading: boolean;
  iconName: IconName;
  action: () => void;
}

interface SocialButtonsProps {
  boxProps?: BoxProps;
}

export const SocialButtons = ({ boxProps }: SocialButtonsProps) => {
  const { handleSignInWithGoogle, isGoogleSignInPending } =
    useAuthGoogleSignIn();
  const { handleSignInWithApple, isAppleSignInPending } = useAuthAppleSignIn();

  const posthog = usePostHog();

  const socialButtons: SocialButton[] =
    Platform.OS === "android"
      ? [
          {
            text: "Entrar com Google",
            iconName: "google",
            isLoading: isGoogleSignInPending,
            action: () => {
              posthog.capture(PostHogEventsName.PRESS_IN_GOOGLE_LOGIN_BUTTON);
              handleSignInWithGoogle();
            },
          },
        ]
      : [
          {
            text: "Continuar com Google",
            iconName: "google",
            isLoading: isGoogleSignInPending,
            action: () => {
              posthog.capture(PostHogEventsName.PRESS_IN_GOOGLE_LOGIN_BUTTON);
              handleSignInWithGoogle();
            },
          },
          {
            text: "Continuar com Apple",
            iconName: "apple",
            isLoading: isAppleSignInPending,
            action: () => {
              posthog.capture(PostHogEventsName.PRESS_IN_APPLE_LOGIN_BUTTON);
              handleSignInWithApple();
            },
          },
        ];

  return (
    <Box rowGap={"s16"} {...boxProps}>
      {socialButtons.map((button, index) => (
        <Button
          key={index}
          preset="outline"
          text={button.text}
          onPress={button.action}
          iconName={button.iconName}
          isLoading={button.isLoading}
        />
      ))}
    </Box>
  );
};
