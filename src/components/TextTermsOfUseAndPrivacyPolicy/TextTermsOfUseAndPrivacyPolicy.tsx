import * as WebBrowser from "expo-web-browser";
import { usePostHog } from "posthog-react-native";

import { Links, PostHogEventsName } from "@constraints";

import { Text } from "../Text/Text";

export const TextTermsOfUseAndPrivacyPolicy = () => {
  const posthog = usePostHog();

  return (
    <Text
      preset="paragraphsBig"
      color={"backgroundConstrast"}
      textAlign={"center"}
      weight="medium"
      mt={"s30"}
      style={{ width: "70%", alignSelf: "center" }}
    >
      ao continuar, você concorda com os{" "}
      <Text
        weight="bold"
        preset="paragraphsBig"
        color={"primary"}
        onPress={async () => {
          posthog.capture(PostHogEventsName.PRESS_IN_TERMS_OF_SERVICE_BUTTON);
          await WebBrowser.openBrowserAsync(Links.TERMS_OF_SERVICE);
        }}
      >
        Termos de Serviço
      </Text>{" "}
      &{" "}
      <Text
        weight="bold"
        preset="paragraphsBig"
        color={"primary"}
        onPress={async () => {
          posthog.capture(PostHogEventsName.PRESS_IN_PRIVACY_POLICY_BUTTON);
          await WebBrowser.openBrowserAsync(Links.PRIVACY_POLICY);
        }}
      >
        Política de Privacidade
      </Text>
    </Text>
  );
};
