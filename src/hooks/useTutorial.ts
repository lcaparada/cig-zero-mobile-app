import { useEffect, useRef, useState } from "react";
import { ScrollView } from "react-native";

import { secureStorage, useSplash } from "@services";

export const useTutorial = () => {
  const { splashComplete } = useSplash();

  const [showStartTutorialPopup, setShowStartTutorialPopup] = useState(false);

  const scrollRef = useRef<ScrollView>(null);

  useEffect(() => {
    const checkFirstTime = async () => {
      const hasSeenTutorial = await secureStorage.getItem("hasSeenTutorial");

      if (hasSeenTutorial) {
        return;
      } else if (splashComplete) {
        setShowStartTutorialPopup(true);

        await secureStorage.setItem("hasSeenTutorial", "true");
      }
    };

    checkFirstTime();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [splashComplete]);

  return { scrollRef, showStartTutorialPopup, setShowStartTutorialPopup };
};
