import { Platform } from "react-native";

import { Box } from "../Box/Box";
import { Button } from "../Button/Button";
import { IconName } from "../Icon/Icon";

interface SocialButton {
  text: string;
  isLoading: boolean;
  iconName: IconName;
  action: () => void;
}

interface SocialButtonsProps {
  copyForApple?: string;
  copyForGoogle?: string;
}

export const SocialButtons = ({
  copyForApple,
  copyForGoogle,
}: SocialButtonsProps) => {
  const socialButtons: SocialButton[] =
    Platform.OS === "android"
      ? [
          {
            text: copyForGoogle ?? "Entrar com Google",
            iconName: "google",
            isLoading: false,
            action: () => {},
          },
        ]
      : [
          {
            text: copyForGoogle ?? "Entrar com Google",
            iconName: "google",
            isLoading: false,
            action: () => {},
          },
          {
            text: copyForApple ?? "Entrar com Apple",
            iconName: "apple",
            isLoading: false,
            action: () => {},
          },
        ];

  return (
    <Box>
      <Box rowGap={"s16"} mt="s20">
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
    </Box>
  );
};
