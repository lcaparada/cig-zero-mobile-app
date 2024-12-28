import { useEffect, useRef } from "react";
import { ScrollView } from "react-native";

import { useCopilot } from "react-native-copilot";

import { secureStorage, useSplash } from "@services";

export const useTutorial = () => {
  const { splashComplete } = useSplash();

  const scrollRef = useRef<ScrollView>(null);
  const { start } = useCopilot();

  useEffect(() => {
    const checkFirstTime = async () => {
      const hasSeenTutorial = await secureStorage.getItem("hasSeenTutorial");

      if (hasSeenTutorial) {
        return;
      } else if (splashComplete) {
        start("counter", scrollRef.current);

        await secureStorage.setItem("hasSeenTutorial", "true");
      }
    };

    checkFirstTime();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [splashComplete]);

  return { scrollRef };
};
