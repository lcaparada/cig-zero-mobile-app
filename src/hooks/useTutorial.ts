import { useEffect, useRef, useState } from "react";
import { ScrollView } from "react-native";

import { secureStorage, useSplash } from "@services";

const TUTORIAL_KEY = "isTutorialSeen";

export const useTutorial = () => {
  const { splashComplete } = useSplash();

  const [showStartTutorialPopup, setShowStartTutorialPopup] = useState(false);

  const scrollRef = useRef<ScrollView>(null);

  useEffect(() => {
    const checkFirstTime = async () => {
      const hasSeenTutorial = await secureStorage.getItem(TUTORIAL_KEY);

      if (hasSeenTutorial) {
        return;
      } else if (splashComplete) {
        setShowStartTutorialPopup(true);

        await secureStorage.setItem(TUTORIAL_KEY, "true");
      }
    };

    checkFirstTime();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [splashComplete]);

  return { scrollRef, showStartTutorialPopup, setShowStartTutorialPopup };
};
